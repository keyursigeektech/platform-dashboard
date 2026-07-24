import { Metrics } from '../utils/metrics'

export interface DashboardData {
  metrics: Metrics
  lastUpdated: Date
}

// BUG: declared return type says Promise<DashboardData> but actually
// resolves with a differently-shaped object (string dates, missing metrics field)
export async function fetchDashboardData(): Promise<DashboardData> {
  const response = await fetch('/api/dashboard')
  const data = await response.json()

  return {
    stats: data.stats,
    updatedAt: data.updatedAt,
  }
}
