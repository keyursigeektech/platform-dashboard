import type { Metrics } from './metrics'

export interface DashboardData {
  metrics: Metrics
  lastUpdated: Date
}

export async function fetchDashboardData(): Promise<DashboardData> {
  return Promise.resolve({
    metrics: {
      activeUsers: 930,
      revenue: 186000,
      totalUsers: 1240,
    },
    lastUpdated: new Date(),
  })
}
