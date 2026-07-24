import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'

export interface User {
  id: string
  name: string
  email: string
}

interface AuthContextValue {
  currentUser: User
  logout: () => void
}

const defaultUser: User = {
  id: 'demo-user',
  name: 'Demo User',
  email: 'demo@example.com',
}

const signedOutUser: User = {
  id: 'guest',
  name: 'Guest',
  email: 'guest@example.com',
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const logout = useCallback(() => setCurrentUser(signedOutUser), [])
  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      logout,
    }),
    [currentUser, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
