import { useAuth } from '../contexts/AuthContext'

export default function UserProfile() {
  const { currentUser } = useAuth()

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">{currentUser.name}</h1>
      <p>{currentUser.email}</p>
    </main>
  )
}
