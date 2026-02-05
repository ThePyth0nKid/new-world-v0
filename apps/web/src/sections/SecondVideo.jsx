import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { asset } from '../../constants/config';

const SecondVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.set('.kid', { marginTop: '-60vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.kid',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true
      }
    })

    tl.to('.kid', { opacity: 1, duration: 1, ease: 'power1.inOut' })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<')
    }
  })

  return (
    <section className="kid">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src={asset('/videos/output2.mp4')}
          className="size-full object-cover second-vd"
          style={{ objectPosition: 'center top' }}
        />
      </div>
    </section>
  )
}

export default SecondVideo
