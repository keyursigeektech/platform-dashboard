import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import { fetchDashboardData, type DashboardData } from '../utils/api'
import { calculateActiveRate, calculateAverageRevenue } from '../utils/metrics'

const activeTrend = { direction: 'up', percentage: 4.2 } as const

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    void fetchDashboardData()
      .then(setData)
      .catch(() => setError('Dashboard data could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="p-6">Loading...</p>
  }

  if (error || !data) {
    return <p className="p-6 text-red-700">{error ?? 'Dashboard data is unavailable.'}</p>
  }

  const activeRate = calculateActiveRate(data.metrics)
  const avgRevenue = calculateAverageRevenue(data.metrics)

  return (
    <main className="p-6">
      <h1 className="mb-1 text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mb-6 text-sm text-gray-500">
        Updated {data.lastUpdated.toLocaleString()}
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Total Users" value={data.metrics.totalUsers} />
        <StatCard
          format="percent"
          label="Active Rate"
          trend={activeTrend}
          value={activeRate}
        />
        <StatCard format="currency" label="Avg Revenue" value={avgRevenue} />
      </div>
    </main>
  )
}
