import { HomeIcon, UserIcon, BellIcon } from './icons/HeroIcons'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'

interface NavbarProps {
  activeTheme: 'light' | 'dark'
  onThemeChange: (theme: string) => void
}

export default function Navbar({ activeTheme, onThemeChange }: NavbarProps) {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(true)

  return (
    <nav className="flex items-center justify-between p-4 bg-brand-primary text-white">
      <div className="flex items-center gap-2">
        <HomeIcon className="w-5 h-5" />
        <span>Platform Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon />
        <UserIcon onClick={() => setOpen(!open)} />
        <span>{user.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}
