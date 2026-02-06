import { AuthModal } from '../auth'

const LoginPrompt = ({ onDismiss, onAuth }) => (
  <AuthModal
    isOpen={true}
    onClose={onDismiss}
    onSuccess={onAuth}
    title="Charakter speichern"
  />
)

export default LoginPrompt
