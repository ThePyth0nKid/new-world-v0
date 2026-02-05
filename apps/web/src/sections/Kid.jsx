import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Kid = () => {
  useGSAP(() => {
    gsap.set('.kid-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.kid-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.kid-life .img-box', {
      scrollTrigger: {
        trigger: '.kid-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="kid-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-5 sm:ps-10 mt-96">
        <div className="kid-1">
          {/* Bild folgt */}
        </div>
        <div className="kid-3">
          {/* Bild folgt */}
        </div>
      </div>

      <div className="lg:w-1/2 kid-life-content">
        <div className="max-w-xl lg:ps-32 ps-5 sm:ps-10">
          <h1>Captain Kid</h1>
          <h2>Ein Mann der Regeln. Mysterioes. Unerschuetterlich.</h2>
          <p>Kid hat die New World gebaut — oder sie hat ihn gefunden. Niemand weiss es genau. Er spricht wenig, aber jedes Wort wiegt. Sein Titanring ist das einzige Zeichen, dass er jemals etwas verloren hat.</p>
        </div>

        <div className="kid-2">
          {/* Bild folgt */}
        </div>

        <p className="max-w-xl lg:ps-32 ps-5 sm:ps-10">Wer die Regeln versteht, darf bleiben. Wer sie bricht, geht. Es gibt keine zweite Warnung — nur die Frage, ob du bereit bist.</p>
      </div>
    </section>
  )
}

export default Kid
