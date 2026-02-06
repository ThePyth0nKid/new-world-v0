import { useState, useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'

const ArrivalInterview = ({ messages, loading, onSendMessage }) => {
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || loading) return
    onSendMessage(trimmed)
    setInput('')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h2 className="text-cyan font-round-bold text-xl md:text-2xl">
          Captain Kid
        </h2>
        <p className="text-white/40 text-sm mt-1">
          Erzaehl mir von dir, damit ich dich kennenlernen kann.
        </p>
      </div>

      <div className="arrival-chat flex-1 overflow-y-auto px-2" role="log" aria-live="polite">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
        {loading && <ChatMessage isLoading />}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Deine Antwort..."
          maxLength={2000}
          disabled={loading}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-6 py-3 bg-cyan/20 text-cyan rounded-lg font-round-bold text-sm hover:bg-cyan/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Senden
        </button>
      </form>
    </div>
  )
}

export default ArrivalInterview
