const JoinMission = () => {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-40 2xl:px-80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-amber text-3xl md:text-5xl mb-12">
          Was wir bauen
        </h2>

        <div className="text-white text-lg md:text-2xl space-y-8">
          <p>
            <span className="text-cyan">New World</span> ist ein Playbook für die KI-Ära.
            Ein Kunstprojekt. Eine Lernreise. Ein Experiment.
          </p>

          <p>
            Wir nutzen die neuesten AI-Tools — nicht als Spielerei, sondern als
            echte Produktionspipeline. <span className="text-amber">24/7</span>.
            Von der Idee bis zum fertigen Content.
          </p>

          <p>
            Das Ziel: Zeigen, was möglich ist, wenn Mensch und Maschine
            wirklich zusammenarbeiten. Nicht gegeneinander. Nicht nebeneinander.
            <span className="text-cyan"> Miteinander</span>.
          </p>
        </div>

        {/* Vision Box */}
        <div className="mt-16 p-8 border-l-4 border-cyan bg-white/5 rounded-r-lg">
          <h3 className="text-cyan text-xl md:text-2xl font-round-bold mb-4">
            Die Vision
          </h3>
          <p className="text-white/80 text-lg md:text-xl">
            Open Source. Transparent. Jeder Schritt dokumentiert.
            Wir bauen nicht im Verborgenen — wir bauen vor den Augen der Welt.
          </p>
        </div>
      </div>
    </section>
  )
}

export default JoinMission
