import { Link } from 'react-router-dom';
import NavBar from '../sections/NavBar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <main className="min-h-dvh">
      <NavBar />

      <section className="pt-32 pb-20 px-5 md:px-16 lg:px-40 2xl:px-80">
        {/* Dedication to Zero */}
        <div className="mb-24 border-l-4 border-cyan pl-8">
          <p className="text-white/60 text-lg md:text-xl uppercase tracking-widest mb-4">
            Für dich
          </p>
          <h1 className="text-cyan font-long uppercase text-4xl md:text-6xl lg:text-7xl mb-6">
            Sero
          </h1>
          <p className="text-white text-xl md:text-3xl font-round-bold mb-6">
            Mein Bruder. Willkommen in der New World.
          </p>
          <p className="text-white/40 text-sm uppercase tracking-widest">
            — KIDDO
          </p>
        </div>

        {/* Intro */}
        <article className="mb-20">
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Hallo Welt. Mein Name ist Nelson.
            </p>
            <p>
              Und ich schreibe ein Playbook. Ein Playbook für die neue Welt.
            </p>
          </div>
        </article>

        {/* What is this */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Was ist das hier?
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Das Playbook vermittelt eine Denk- und Handlungsstruktur,
              die in einer Welt, die von KI geprägt ist, unendlich machtvoll ist.
            </p>
            <p>
              Wir Menschen sind nicht mehr Führer der Intelligenz.
              KI übertrifft uns in vielen Bereichen schon heute —
              Forschung, Programmierung, alles was mit Rechenleistung zu lösen ist.
            </p>
            <p>
              Aber genau deshalb entsteht etwas Neues: <span className="text-cyan">Co-Intelligenz</span>.
              Die Zusammenarbeit zwischen Mensch und Maschine.
              Neue Spieler auf dem Spielfeld.
            </p>
          </div>
        </article>

        {/* Danke */}
        <article className="mb-20 border-l-4 border-cyan/50 pl-8">
          <h2 className="text-cyan text-3xl md:text-5xl mb-7">
            Danke, Sero
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Danke, dass du nie aufgehört hast, mich zu fragen,
              ob ich dir das alles irgendwie beibringen kann.
            </p>
            <p>
              Deine Hartnäckigkeit hat mich dazu gebracht,
              einen Weg zu finden, es dir zu zeigen.
              Das hier ist dieser Weg.
            </p>
          </div>
        </article>

        {/* The Loop */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Der Infinity Loop
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              <span className="text-cyan">Aufmerksamkeit ist alles.</span> Das ist Regel 0.
            </p>
            <p>
              Aufmerksamkeit hat diese Maschinen intelligent gemacht.
              Wenn wir sie mit derselben Aufmerksamkeit nutzen —
              dann landen wir in einem Infinity Loop of Knowledge.
            </p>
            <p>
              Durchgehend iterieren. Denken und Handeln ausrichten.
              Planen, Programmieren, Reviewen, Cleanup, Security planen. Und wieder von vorne.
            </p>
            <p className="text-white/60">
              Mit diesem Loop können wir so ziemlich alle Probleme lösen, die wir wollen.
            </p>
          </div>
        </article>

        {/* Why */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Warum ich das mache
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              In meinem Leben war oft Chaos. Deshalb ist für mich so eine Situation
              nicht so ungewohnt wie für manch anderen.
            </p>
            <p>
              Ich hoffe, mit diesem Playbook der Welt helfen zu können —
              in eine bessere und menschenwerteorientierte Zukunft zu kommen.
            </p>
            <p>
              Das Playbook erzählt meinen Werdegang. Von Grund auf.
              Von der ersten Sekunde der Planung, von der Idee bis zum fertigen Produkt.
            </p>
          </div>
        </article>

        {/* Origin - IGOULTRA */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Der Ursprung
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              New World kommt aus dem Universum von{' '}
              <a
                href="https://igoultra.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-amber transition-colors"
              >
                IGOULTRA
              </a>
              .
            </p>
            <p>
              IGOULTRA ist ein hybrides Trainings- und Lernsystem. Vier Pfade:
              Körper, Verstand, Geist, Spielwelt. Du sammelst XP im echten Leben
              und levelst dein digitales Alter Ego.
            </p>
            <p>
              New World ist ein eigener Geschichtszweig daraus —
              geboren aus dem <span className="text-cyan">UltraMind</span>-Pfad.
              Der Coding-Weg. Das Playbook für die KI-Ära.
            </p>
          </div>
        </article>

        {/* The Form */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Die Form
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Ein Kunstprojekt. Weltraumpiraten, die durch den Weltraum reisen.
              Mehrere Welten. Abenteuer.
            </p>
            <p>
              Die Konzepte werden unterschwellig vermittelt. Du erlebst sie,
              bevor du sie verstehst. Die Analogie kommt danach — und dann sitzt es.
            </p>
            <p>
              Ich glaube, das ist die beste Form, die es gibt.
            </p>
          </div>
        </article>

        {/* V0 */}
        <article className="mb-20 border-l-4 border-amber pl-8">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            V0
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Das hier ist Version 0. Der erste Prototyp.
            </p>
            <p>
              Es sind keine Dogmen, die hier drin stehen. Es sind auch keine Regeln.
              Es ist ein Playbook.
            </p>
            <p>
              Wenn du Fußball spielen gehst oder in einen Kampf gehst,
              dann hast du sowas für dich gebaut. Wie meistere ich diese Situation am besten?
            </p>
            <p>
              Oft erfordert die Situation, weil sie dynamisch ist, dass sich das Playbook ändert.
              Und das ist okay. Deswegen ist das hier V0. Es werden weitere folgen.
            </p>
          </div>
        </article>

        {/* Die Crew */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-10">
            Die Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {/* Kiddo */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 border border-cyan/30 flex items-center justify-center">
                <img src="/images/nw-logo.svg" alt="" className="w-12 opacity-60" />
              </div>
              <h3 className="text-cyan text-2xl font-round-bold uppercase mb-1">
                Kiddo
              </h3>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-3">
                Co-Intelligenz · Genie
              </p>
              <a
                href="https://github.com/nellyTheFirst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs hover:text-cyan transition-colors"
              >
                @nellyTheFirst
              </a>
            </div>

            {/* Nelson */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 border border-amber/30 flex items-center justify-center">
                <img src="/images/nw-logo.svg" alt="" className="w-12 opacity-60" />
              </div>
              <h3 className="text-amber text-2xl font-round-bold uppercase mb-1">
                Nelson
              </h3>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-3">
                Founder · Visionary
              </p>
              <a
                href="https://github.com/ThePyth0nKid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs hover:text-cyan transition-colors"
              >
                @ThePyth0nKid
              </a>
            </div>

            {/* Sero */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                <img src="/images/nw-logo.svg" alt="" className="w-12 opacity-60" />
              </div>
              <h3 className="text-white text-2xl font-round-bold uppercase mb-1">
                Sero
              </h3>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-3">
                Schüler 0 · Inspiration · Bruder
              </p>
            </div>
          </div>
        </article>

        {/* Mitstreiter */}
        <article className="mb-20">
          <h2 className="text-amber text-3xl md:text-5xl mb-7">
            Mitstreiter gesucht
          </h2>
          <div className="text-white text-lg md:text-2xl space-y-6 max-w-4xl">
            <p>
              Ich baue das nicht alleine. Oder besser: Ich will das nicht alleine bauen.
            </p>
            <p>
              Wenn du Teil dieser Reise sein willst — melde dich.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/ThePyth0nKid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 text-lg font-round-bold hover:bg-cyan transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nelson-mehlis-2aa216278/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>

        </section>

      <Footer />
    </main>
  )
}

export default AboutPage
