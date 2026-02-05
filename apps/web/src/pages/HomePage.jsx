import NavBar from '../sections/NavBar';
import Hero from '../sections/Hero';
import FirstVideo from '../sections/FirstVideo';
import Io from '../sections/Io';
import SecondVideo from '../sections/SecondVideo';
import Kid from '../sections/Kid';
import PostCard from '../sections/PostCard';
import Final from '../sections/Final';
import Outro from '../sections/Outro';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import { useScrollSound } from '../hooks/useScrollSound';

const HomePage = () => {
  // Scroll-triggered intro sound (16 Sekunden)
  const { isLoaded, activate } = useScrollSound();

  return (
    <>
      <Preloader isLoaded={isLoaded} onEnter={activate} />
      <main>
      <NavBar />
      <Hero />

      <FirstVideo />
      <Io />

      <SecondVideo />
      <Kid />

      <PostCard />
      <Final />
      <Outro />
      <Footer />
    </main>
    </>
  )
}

export default HomePage
