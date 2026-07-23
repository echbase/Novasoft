import * as THREE from 'three';

/*
 * Palier 3 — l'emblème NovaSoft en 3D temps réel (Three.js pur, pas de R3F :
 * une seule scène, chunk plus léger). Reconstruit le logo officiel en
 * volumes : 3 arcs brisés (tores partiels), 3 nœuds sphériques, 3 points.
 * Réagit à la souris (tilt lissé) et au scroll (rotation). Couleurs lues
 * depuis les tokens CSS — zéro hex brut. Chargé desktop-only, après load,
 * en idle (voir ScrollExperience) : aucun coût sur le chemin critique.
 */

const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function init(): () => void {
  const host = document.getElementById('emblem3d');
  if (!host) return () => {};

  const size = host.clientWidth || 130;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  renderer.setSize(size, size);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
  camera.position.z = 5.6;

  const magenta = new THREE.Color(token('--magenta'));
  const violet = new THREE.Color(token('--violet'));
  const cyan = new THREE.Color(token('--cyan'));
  const amber = new THREE.Color(token('--amber'));

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const keyLight = new THREE.PointLight(violet, 26);
  keyLight.position.set(3, 3, 4);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(cyan, 18);
  rimLight.position.set(-3, -2, 3);
  scene.add(rimLight);

  const group = new THREE.Group();
  scene.add(group);

  const mat = (c: THREE.Color) =>
    new THREE.MeshStandardMaterial({
      color: c,
      roughness: 0.28,
      metalness: 0.35,
      emissive: c,
      emissiveIntensity: 0.22,
    });

  /* 3 arcs brisés (~80°), tournés de 120°, centrés sur les axes des nœuds */
  const ARC = 1.42;
  const nodeAngles = [Math.PI / 2, Math.PI / 2 + (2 * Math.PI) / 3, Math.PI / 2 + (4 * Math.PI) / 3];
  const arcColors = [magenta, cyan, amber];
  nodeAngles.forEach((angle, i) => {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(1, 0.16, 24, 64, ARC), mat(arcColors[i]));
    arc.rotation.z = angle - ARC / 2;
    group.add(arc);
  });

  /* 3 nœuds sphériques sur l'axe de chaque arc */
  nodeAngles.forEach((angle, i) => {
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.4, 40, 40), mat(arcColors[i]));
    node.position.set(Math.cos(angle) * 1.62, Math.sin(angle) * 1.62, 0);
    group.add(node);
  });

  /* 3 points dans les césures (couleur croisée, comme le logo) */
  const dotColors = [cyan, amber, magenta];
  nodeAngles.forEach((angle, i) => {
    const gap = angle + Math.PI / 3;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 20), mat(dotColors[i]));
    dot.position.set(Math.cos(gap), Math.sin(gap), 0);
    group.add(dot);
  });

  group.rotation.x = 0.35;

  /* Souris (tilt lissé) + scroll (rotation) */
  let mx = 0;
  let my = 0;
  const onMouse = (e: MouseEvent) => {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener('mousemove', onMouse, { passive: true });

  let raf = 0;
  const t0 = performance.now();
  const draw = (now: number) => {
    raf = requestAnimationFrame(draw);
    const t = (now - t0) / 1000;
    const scroll =
      (window.scrollY || 0) /
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    group.rotation.y += (mx * 0.55 + t * 0 - group.rotation.y) * 0.06 + 0.003;
    group.rotation.x += (0.35 + my * 0.4 - group.rotation.x) * 0.06;
    group.rotation.z = scroll * Math.PI * 1.5 + Math.sin(t * 0.4) * 0.06;
    group.position.y = Math.sin(t * 0.8) * 0.08;
    renderer.render(scene, camera);
  };
  raf = requestAnimationFrame(draw);

  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
  };
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('mousemove', onMouse);
    document.removeEventListener('visibilitychange', onVisibility);
    group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      }
    });
    renderer.dispose();
    host.removeChild(renderer.domElement);
  };
}
