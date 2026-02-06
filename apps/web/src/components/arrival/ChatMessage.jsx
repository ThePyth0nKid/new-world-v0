const ChatMessage = ({ role, content, isLoading = false }) => {
  const isUser = role === 'user'

  if (isLoading) {
    return (
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-cyan/20 flex-shrink-0 flex-center">
          <span className="text-cyan text-xs font-round-bold">CK</span>
        </div>
        <div className="arrival-message arrival-message--assistant">
          <span className="arrival-typing">
            <span /><span /><span />
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-start gap-3 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-cyan/20 flex-shrink-0 flex-center">
          <span className="text-cyan text-xs font-round-bold">CK</span>
        </div>
      )}
      <div className={`arrival-message ${isUser ? 'arrival-message--user' : 'arrival-message--assistant'}`}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-amber/20 flex-shrink-0 flex-center">
          <span className="text-amber text-xs font-round-bold">DU</span>
        </div>
      )}
    </div>
  )
}

export default ChatMessage
