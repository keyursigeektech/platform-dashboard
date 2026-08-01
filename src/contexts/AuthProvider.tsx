import { useMemo, useState, type ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import type { User } from '../utils/api'

const demoUser: User = { id: '1', name: 'Alex Morgan', email: 'alex.morgan@example.com' }

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(demoUser)
  const value = useMemo(() => ({ currentUser, logout: () => setCurrentUser(null) }), [currentUser])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
