import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon"

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;

    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to('.overlay-logo', { opacity: 1, onComplete: () => {
        gsap.to('.overlay-logo', { opacity: 0 });
      } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<')

    video.onloadedmetadata = () => {
      video.pause();
      tl.to(video, { currentTime: video.duration, duration: 3, ease: 'power1.inOut' }, 0);
    }
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="scale-out"
          onPlay={(e) => e.target.pause()}
        />
        <div className="title-logo-text fade-out text-center">
          <h1 className="gradient-title">New World</h1>
          <p className="text-white/40 text-lg md:text-2xl tracking-[0.4em] uppercase mt-2 font-round-bold">Playbook V0</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center fade-out">
          <p className="scroll-hint text-white/50 text-sm md:text-base tracking-[0.3em] uppercase font-round">Scroll to explore</p>
        </div>
      </div>

      <div>
        <div className="mask-logo-text text-center">
          <h1 className="gradient-title">New World</h1>
          <p className="text-white/40 text-lg md:text-2xl tracking-[0.4em] uppercase mt-2 font-round-bold">Playbook V0</p>
        </div>
      </div>

      <div className="fake-logo-wrapper">
        <div className="overlay-logo-text text-center">
          <h1 className="gradient-title">New World</h1>
          <p className="text-white/40 text-lg md:text-2xl tracking-[0.4em] uppercase mt-2 font-round-bold">Playbook V0</p>
        </div>
      </div>

      <ComingSoon />
    </section>
  )
}

export default Hero
