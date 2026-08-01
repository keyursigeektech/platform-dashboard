import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { fetchUser, type User } from '../utils/api'

export default function UserProfile(): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      setUser(null)
      setLoading(false)
      return
    }
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    fetchUser(currentUser.id, controller.signal)
      .then(setUser)
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : 'Unable to load profile')
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [currentUser])

  if (!currentUser) return <p className="p-6 text-slate-500" role="status">You are signed out.</p>
  if (loading) return <p className="p-6 text-slate-500" role="status">Loading profile…</p>
  if (error || !user) return <p className="p-6 text-rose-600" role="alert">{error ?? 'Profile is unavailable.'}</p>

  return (
    <main className="mx-auto max-w-3xl p-6 sm:p-8">
      <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg font-semibold">{user.name}</p>
        <a className="mt-1 inline-block text-brand-primary hover:underline dark:text-cyan-400" href={`mailto:${user.email}`}>{user.email}</a>
      </section>
    </main>
  )
}
