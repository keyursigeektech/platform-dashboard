import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import { fetchDashboardData, type DashboardData } from '../utils/api'
import { calculateActiveRate, calculateAverageRevenue } from '../utils/metrics'

export default function Dashboard(): JSX.Element {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetchDashboardData(controller.signal)
      .then(setData)
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : 'Unable to load dashboard')
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [])

  if (loading) return <p className="p-6 text-slate-500" role="status">Loading dashboard…</p>
  if (error || !data) return <p className="p-6 text-rose-600" role="alert">{error ?? 'Dashboard data is unavailable.'}</p>

  const activeRate = calculateActiveRate(data.metrics)
  const averageRevenue = calculateAverageRevenue(data.metrics)

  return (
    <main className="mx-auto max-w-6xl p-6 sm:p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Last updated {data.lastUpdated.toLocaleString()}</p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Platform metrics">
        <StatCard label="Total Users" value={data.metrics.totalUsers} trend={{ direction: 'up', percentage: 8.2 }} />
        <StatCard label="Active Rate" value={activeRate} format="percent" trend={{ direction: 'up', percentage: 4.7 }} />
        <StatCard label="Average Revenue per User" value={averageRevenue} format="currency" />
      </section>
    </main>
  )
}
