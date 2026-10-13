import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import IntegrationsPage from '@/components/solutions/IntegrationsPage';
export const metadata: Metadata={title:'Intégrations & API — NovaSoft · Île Maurice',description:'APIs, synchronisation de catalogue et connexions métier : NovaSoft relie les outils et les données pour réduire la ressaisie et automatiser les flux utiles.',alternates:{canonical:'/integrations-api/'},robots:process.env.VERCEL_ENV==='production'?{index:true,follow:true}:{index:false,follow:false}};
export default function Page(){return <><Nav/><main id="contenu"><IntegrationsPage/></main><Footer/></>}