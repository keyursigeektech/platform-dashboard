export interface Metrics {
  totalUsers: number
  activeUsers: number
  revenue: number
}

export function calculateActiveRate(metrics: Metrics): number {
  if (metrics.totalUsers <= 0) {
    return 0
  }

  return (metrics.activeUsers / metrics.totalUsers) * 100
}

export function calculateAverageRevenue(metrics: Metrics): number {
  if (metrics.totalUsers <= 0) {
    return 0
  }

  return metrics.revenue / metrics.totalUsers
}
