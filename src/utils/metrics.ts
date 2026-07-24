export interface Metrics {
  totalUsers: number
  activeUsers: number
  revenue: number
}

export function calculateActiveRate(metrics: Metrics): number {
  // BUG: divides by revenue instead of totalUsers, and no guard against 0
  return (metrics.activeUsers / metrics.revenue) * 100
}

export function calculateAverageRevenue(metrics: Metrics): number {
  // BUG: no guard when totalUsers is 0 -> Infinity/NaN at runtime
  return metrics.revenue / metrics.totalUsers
}
