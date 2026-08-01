import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Theme } from '../App'
import { useAuth } from '../contexts/AuthContext'
import { BellIcon, HomeIcon, UserIcon } from './icons/HeroIcons'

interface NavbarProps {
  activeTheme: Theme
  onThemeChange: (theme: Theme) => void
}

export default function Navbar({ activeTheme, onThemeChange }: NavbarProps): JSX.Element {
  const { currentUser, logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-brand-primary px-6 py-4 text-white shadow-sm" aria-label="Main navigation">
      <Link to="/" className="flex items-center gap-2 font-semibold hover:text-indigo-100">
        <HomeIcon className="h-5 w-5" aria-hidden="true" />
        <span>Platform Dashboard</span>
      </Link>
      <div className="flex items-center gap-4">
        <button type="button" className="rounded-md px-3 py-1.5 text-sm ring-1 ring-white/30 hover:bg-white/10" onClick={() => onThemeChange(activeTheme === 'light' ? 'dark' : 'light')}>
          {activeTheme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <BellIcon className="h-5 w-5" aria-hidden="true" />
        {currentUser ? (
          <div className="relative">
            <button type="button" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/10" aria-expanded={open} aria-label="Open user menu" onClick={() => setOpen((isOpen) => !isOpen)}>
              <UserIcon className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{currentUser.name}</span>
            </button>
            {open ? (
              <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-1 text-slate-800 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <Link to="/profile" className="block rounded px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700" onClick={() => setOpen(false)}>Profile</Link>
                <button type="button" className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700" onClick={() => { logout(); setOpen(false) }}>Log out</button>
              </div>
            ) : null}
          </div>
        ) : <span className="text-sm text-indigo-100">Signed out</span>}
      </div>
    </nav>
  )
}
