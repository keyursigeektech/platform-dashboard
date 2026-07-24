import { HomeIcon, UserIcon, BellIcon } from './icons/HeroIcons'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

interface NavbarProps {
  activeTheme: 'light' | 'dark'
  onThemeChange: (theme: 'light' | 'dark') => void
}

export default function Navbar({ activeTheme, onThemeChange }: NavbarProps) {
  const { currentUser, logout } = useAuth()
  const nextTheme = activeTheme === 'light' ? 'dark' : 'light'

  return (
    <nav className="flex items-center justify-between p-4 bg-brand-primary text-white">
      <Link className="flex items-center gap-2" to="/">
        <HomeIcon className="w-5 h-5" />
        <span>Platform Dashboard</span>
      </Link>
      <div className="flex items-center gap-4">
        <BellIcon className="h-5 w-5" />
        <Link aria-label="Open profile" to="/profile">
          <UserIcon className="h-5 w-5" />
        </Link>
        <span>{currentUser.name}</span>
        <button
          className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          onClick={() => onThemeChange(nextTheme)}
          type="button"
        >
          {nextTheme === 'dark' ? 'Dark mode' : 'Light mode'}
        </button>
        <button className="text-sm underline" onClick={logout} type="button">
          Logout
        </button>
      </div>
    </nav>
  )
}
