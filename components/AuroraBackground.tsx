'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Signature 1 — fond "liquid aurora" : portage fidèle du shader fbm
 * du fichier de référence (novasoft-site-vitrine.html).
 * Demi-résolution, low-power, une seule frame si reduced-motion,
 * repli CSS (dégradés radiaux) si WebGL indisponible.
 */

const VERT = `
attribute vec2 a;
void main(){ gl_Position = vec4(a,0.,1.); }
`;

const FRAG = `
precision mediump float;
uniform vec2 r;
uniform float t;
float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float n(vec2 p){
  vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);
}
float fbm(vec2 p){
  float v=0.; float a=.5;
  for(int i=0;i<4;i++){ v+=a*n(p); p*=2.03; a*=.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy/r.xy;
  vec2 p = uv*vec2(r.x/r.y,1.)*1.5;
  float T = t*.045;
  float q = fbm(p + vec2(T*.6,-T*.4));
  float w = fbm(p + q + vec2(T*.3, T*.5));
  vec3 col = vec3(.027,.027,.059);
  col = mix(col, vec3(.482,.247,.894), smoothstep(.35,.9,w)*.42);
  col = mix(col, vec3(.902,.098,.839), smoothstep(.55,.98,fbm(p*1.3 - w + T*.22))*.36);
  col = mix(col, vec3(.173,.722,.925), smoothstep(.5,.96,fbm(p*.9 + w - T*.16))*.34);
  col = mix(col, vec3(1.,.702,.125), smoothstep(.74,.99,fbm(p*1.7 + q + T*.1))*.16);
  float v = smoothstep(1.25,.3,length(uv-.5));
  col *= mix(.7,1.06,v);
  gl_FragColor = vec4(col,1.);
}
`;

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const gl = (cv.getContext('webgl', {
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    }) || cv.getContext('experimental-webgl')) as WebGLRenderingContext | null;

    if (!gl) {
      setFailed(true);
      return;
    }

    let resize: (() => void) | null = null;
    try {
      const shader = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
          throw new Error(String(gl.getShaderInfoLog(s)));
        }
        return s;
      };

      const prog = gl.createProgram()!;
      gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(String(gl.getProgramInfoLog(prog)));
      }
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'a');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      const uR = gl.getUniformLocation(prog, 'r');
      const uT = gl.getUniformLocation(prog, 't');
      const SCALE = 0.5; /* demi-résolution pour la perf mobile */

      resize = () => {
        const w = Math.max(2, Math.floor(window.innerWidth * SCALE));
        const h = Math.max(2, Math.floor(window.innerHeight * SCALE));
        cv.width = w;
        cv.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uR, w, h);
      };
      window.addEventListener('resize', resize);
      resize();

      /* Première frame immédiate (visuel présent dès le chargement),
         boucle démarrée à la première interaction : le thread principal
         reste libre pendant le chargement initial (TBT). 30 fps suffisent
         pour un fond en mouvement lent. */
      const t0 = performance.now();
      let last = 0;
      const draw = (now: number) => {
        raf = requestAnimationFrame(draw);
        if (now - last < 33) return;
        last = now;
        gl.uniform1f(uT, (now - t0) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };

      gl.uniform1f(uT, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      let started = false;
      const start = () => {
        if (started || reduced) return;
        started = true;
        raf = requestAnimationFrame(draw);
      };
      const opts = { passive: true, once: true } as const;
      window.addEventListener('scroll', start, opts);
      window.addEventListener('pointermove', start, opts);
      window.addEventListener('touchstart', start, opts);
      window.addEventListener('keydown', start, opts);

      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(raf);
        } else if (started) {
          raf = requestAnimationFrame(draw);
        }
      };
      document.addEventListener('visibilitychange', onVisibility);

      cleanupRef.current = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('scroll', start);
        window.removeEventListener('pointermove', start);
        window.removeEventListener('touchstart', start);
        window.removeEventListener('keydown', start);
        document.removeEventListener('visibilitychange', onVisibility);
        if (resize) window.removeEventListener('resize', resize);
      };
    } catch {
      setFailed(true);
      return;
    }

    return () => {
      if (cleanupRef.current) cleanupRef.current();
    };
  }, []);

  return (
    <>
      {failed ? (
        <div className="aurora-fallback" aria-hidden="true" />
      ) : (
        <canvas id="gl" ref={canvasRef} aria-hidden="true" />
      )}
      <div className="grain" aria-hidden="true" />
    </>
  );
}
