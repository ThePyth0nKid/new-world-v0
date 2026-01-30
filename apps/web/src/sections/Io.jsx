import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MangaBubble } from "../components/manga-bubble"

const Io = () => {
  useGSAP(() => {
    gsap.set('.io', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.io',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.io .img-box', {
      scrollTrigger: {
        trigger: '.io',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  })

  return (
    <section className="io">
      <div className="max-w-lg io-content">
        <h1>Io</h1>
        <h2>17 Jahre. Waise. Hunger nach Zugehoerigkeit.</h2>
        <p>Io wuchs auf den dystopischen Haefen auf — zwischen Schmugglern, Schiebern und der Dunkelheit von Station zu Station. Ein alter Kugelschreiber ist alles, was ihm geblieben ist. Vielleicht ist es Zeit fuer etwas Neues.</p>

        <div className="io-2 relative">
          <img src="/images/io-2.png" />
          <MangaBubble
            text="Wohin jetzt...?"
            type="thought"
            position="top-right"
            tailDirection="bottom-left"
            width={35}
            delay={0.3}
            seed={77}
          />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="io-1 relative">
          <img src="/images/io-1.png" />
          <MangaBubble
            text="Ein Neuanfang."
            type="normal"
            position="top-right"
            tailDirection="bottom-left"
            width={30}
            delay={0.2}
            seed={42}
          />
        </div>
        <div className="io-3 relative">
          <img src="/images/io-3.png" />
          <MangaBubble
            text="Dieser Ort... er lebt."
            type="narration"
            position="bottom-center"
            tailDirection="bottom-center"
            width={40}
            delay={0.4}
            seed={99}
          />
        </div>
      </div>
    </section>
  )
}

export default Io
