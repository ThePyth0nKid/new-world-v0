import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { asset } from '../../constants/config';

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  })

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src={asset('/images/overlay.webp')} />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src={asset('/videos/postcard-vd.mp4')}
        />

        <button className="group-hover:bg-cyan transation duration-700">
          Explore the New World
        </button>
      </div>
    </section>
  )
}

export default PostCard
