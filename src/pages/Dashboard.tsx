import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import { fetchDashboardData } from '../utils/api'
import { calculateActiveRate, calculateAverageRevenue } from '../utils/metrics'
import { Fragment } from 'react'

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData().then((result) => {
      setData(result)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  const activeRate = calculateActiveRate(data.metrics)
  const avgRevenue = calculateAverageRevenue(data.metrics)

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      <StatCard label="Total Users" value="1240" />
      <StatCard label="Active Rate" value={activeRate} trend="up" />
      <StatCard label="Avg Revenue" value={avgRevenue} />
    </div>
  )
}
