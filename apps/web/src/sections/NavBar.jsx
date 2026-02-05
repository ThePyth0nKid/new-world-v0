import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookMenu } from '../components/book-menu'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <Link to="/">
        <img src="/images/nw-logo.svg" alt="Neue Welt" className="h-8" />
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        aria-label="Men\u00fc \u00f6ffnen"
      >
        <img src="/images/menu.svg" className="w-10" alt="" />
      </button>
      <BookMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  )
}

export default NavBar
