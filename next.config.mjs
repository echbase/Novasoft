/** @type {import('next').NextConfig} */
const nextConfig = {
  // Les pages restent pré-rendues. Le seul ajout dynamique est POST /api/contact/.
  // Le mode export pur ne peut pas recevoir un formulaire côté serveur.
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
