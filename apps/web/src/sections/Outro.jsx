import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      }
    })

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' })
  })

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/nw-logo.svg" alt="Neue Welt" className="h-20 md:h-32" />

        <div className="text-center">
          <h3 className="gradient-title">
            New <br /> World
          </h3>
          <p className="text-white/40 text-center text-lg md:text-2xl mt-4 tracking-[0.4em] uppercase font-round-bold">Playbook V0</p>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <div className="text-center">
            <button className="rounded-full bg-white/20 px-8 py-4 text-lg font-round-bold uppercase tracking-wider text-white/50 cursor-not-allowed">
              Watch the Pilot
            </button>
            <p className="text-cyan/60 text-xs uppercase tracking-widest mt-2">Coming Soon</p>
          </div>
          <div className="text-center">
            <button className="rounded-full border border-white/20 px-8 py-4 text-lg text-white/50 uppercase tracking-wider cursor-not-allowed">
              Enter Dashboard
            </button>
            <p className="text-cyan/60 text-xs uppercase tracking-widest mt-2">Coming Soon</p>
          </div>
        </div>

        <div className="flex-center gap-8 mt-8">
          <span className="text-white/40 text-sm tracking-wider">GitHub</span>
          <span className="text-white/40 text-sm tracking-wider">YouTube</span>
          <span className="text-white/40 text-sm tracking-wider">X</span>
        </div>

        <p className="text-white/20 text-xs mt-4">&copy; 2026 Nelson Mehlis &middot; Crafted with Claude</p>
      </div>
    </section>
  )
}

export default Outro
