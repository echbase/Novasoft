import Nav from '@/components/Nav';
import LandingPage from '@/components/home/LandingPage';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home(){
  return <><Nav/><main id="contenu"><LandingPage/></main><Footer/><RevealObserver/></>;
}
