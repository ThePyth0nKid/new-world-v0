import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Io from './sections/Io';
import SecondVideo from './sections/SecondVideo';
import Kid from './sections/Kid';
import PostCard from './sections/PostCard';
import Final from './sections/Final';
import Outro from './sections/Outro';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
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
    </main>
  )
}

export default App
