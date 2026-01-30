const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <div className="entrance-logo flex-center">
          <img src="/images/nw-logo.svg" alt="Neue Welt" className="h-24 md:h-36" />
        </div>

        <div className="text-wrapper text-center">
          <h3 className="gradient-title">
            New <br /> World
          </h3>
          <p className="text-white/40 text-center text-lg md:text-2xl mt-4 tracking-[0.4em] uppercase font-round-bold">Playbook V0</p>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
