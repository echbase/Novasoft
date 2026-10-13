/** Configuration distincte des propositions revendeurs. Aucun secret exporté au navigateur. */
export function contactConfigured(env: NodeJS.ProcessEnv = process.env): boolean {
  const production = env.VERCEL_ENV === 'production';
  const destination = production ? 'support@novasoft.mu' : 'doriano.hermes@gmail.com';
  const from = env.CONTACT_FROM || '';
  return env.CONTACT_FORM_ENABLED === 'true' && env.CONTACT_PRIVACY_APPROVED === 'true' &&
    !!env.RESEND_API_KEY && !!env.TURNSTILE_SECRET_KEY && !!env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    env.CONTACT_TO === destination && /^[^\r\n<>]*<[^\s<>@]+@novasoft\.mu>$/.test(from);
}
