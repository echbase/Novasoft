import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutPage from '@/components/solutions/AboutPage';
export const metadata: Metadata={title:'À propos — NovaSoft Ltd · Digital Xperience',description:'NovaSoft Ltd, studio digital à Maurice : sites, IA, intégrations et automatisation avec une approche Build → Integrate → Automate.',alternates:{canonical:'/a-propos/'},robots:process.env.VERCEL_ENV==='production'?{index:true,follow:true}:{index:false,follow:false}};
export default function Page(){return <><Nav/><main id="contenu"><AboutPage/></main><Footer/></>}