import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Formspree endpoint
    try {
      const response = await fetch('https://formspree.io/f/xnnqgkpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'Anonym',
          email: formData.email,
          area: formData.area || 'Nicht angegeben',
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', area: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white/5 border border-cyan/30 rounded-lg p-8 text-center">
        <div className="text-cyan text-4xl mb-4">✓</div>
        <h3 className="text-cyan text-2xl font-round-bold mb-2">Nachricht gesendet!</h3>
        <p className="text-white/60">Wir melden uns bei dir.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name (optional) */}
      <div>
        <label htmlFor="name" className="block text-white/60 text-sm uppercase tracking-wider mb-2">
          Name <span className="text-white/30">(optional)</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:shadow-[0_0_15px_rgba(179,245,255,0.15)] transition-all"
          placeholder="Dein Name"
        />
      </div>

      {/* Email (required) */}
      <div>
        <label htmlFor="email" className="block text-white/60 text-sm uppercase tracking-wider mb-2">
          Email <span className="text-cyan">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:shadow-[0_0_15px_rgba(179,245,255,0.15)] transition-all"
          placeholder="deine@email.de"
        />
      </div>

      {/* Area (dropdown) */}
      <div>
        <label htmlFor="area" className="block text-white/60 text-sm uppercase tracking-wider mb-2">
          Bereich
        </label>
        <select
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan/60 focus:shadow-[0_0_15px_rgba(179,245,255,0.15)] transition-all appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23b3f5ff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundSize: '1.5rem',
          }}
        >
          <option value="" className="bg-[#0d0d0d]">Wähle einen Bereich...</option>
          <option value="bild" className="bg-[#0d0d0d]">Bild-Generierung</option>
          <option value="video" className="bg-[#0d0d0d]">Video/Vision</option>
          <option value="audio" className="bg-[#0d0d0d]">Musik/Audio</option>
          <option value="prompts" className="bg-[#0d0d0d]">Prompt Engineering</option>
          <option value="dev" className="bg-[#0d0d0d]">Framework-Dev</option>
          <option value="andere" className="bg-[#0d0d0d]">Andere</option>
        </select>
      </div>

      {/* Message (required) */}
      <div>
        <label htmlFor="message" className="block text-white/60 text-sm uppercase tracking-wider mb-2">
          Nachricht <span className="text-cyan">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:shadow-[0_0_15px_rgba(179,245,255,0.15)] transition-all resize-none"
          placeholder="Was interessiert dich? Was kannst du? Was willst du lernen?"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan text-black font-round-bold py-4 rounded-lg uppercase tracking-wider hover:bg-cyan/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
      </button>
    </form>
  )
}

export default ContactForm
