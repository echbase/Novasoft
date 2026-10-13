import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AIPage from '@/components/solutions/AIPage';
export const metadata: Metadata={title:'IA & automatisation — NovaSoft · Île Maurice',description:'Agents IA, assistants de travail et automatisations métier : NovaSoft aide à réduire les tâches répétitives et à connecter l’IA aux outils existants.',alternates:{canonical:'/ia-automatisation/'},robots:process.env.VERCEL_ENV==='production'?{index:true,follow:true}:{index:false,follow:false}};
export default function Page(){return <><Nav/><main id="contenu"><AIPage/></main><Footer/></>}