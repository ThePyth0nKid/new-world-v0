import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const JoinCTA = () => {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-40 2xl:px-80 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-cyan text-4xl md:text-6xl font-long uppercase mb-4">
            Bereit?
          </h2>
          <p className="text-white/60 text-lg md:text-xl">
            Schreib uns eine Nachricht
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Alternative Contact */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">
            Oder direkt per Email:
          </p>
          <a
            href="mailto:kiddo@ultranova.io?subject=Join%20New%20World"
            className="text-cyan hover:text-amber transition-colors"
          >
            kiddo@ultranova.io
          </a>
        </div>

        {/* Back to Playbook */}
        <div className="mt-20 pt-10 border-t border-white/20 text-center">
          <Link
            to="/"
            className="text-cyan text-xl md:text-2xl hover:text-amber transition-colors"
          >
            &larr; Zurück zum Playbook
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JoinCTA
