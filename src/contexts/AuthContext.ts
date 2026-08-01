import { createContext, useContext } from 'react'
import type { User } from '../utils/api'

export interface AuthContextValue {
  currentUser: User | null
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used within an AuthProvider')
  return value
}
