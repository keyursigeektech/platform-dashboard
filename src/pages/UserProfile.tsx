import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

interface User {
  id: string
  name: string
  email: string
}

export default function UserProfile() {
  const [user, setUser] = useState<User>()
  const { currentUser } = useAuth()

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(`/api/users/${currentUser.id}`)
      const raw: unknown = await response.json()
      // BUG: assigning unknown directly to a strongly typed state setter
      setUser(raw)
    }
    loadUser()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
