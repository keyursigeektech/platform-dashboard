import { describe, expect, it } from 'vitest'
import {
  calculateActiveRate,
  calculateAverageRevenue,
  type Metrics,
} from '../src/utils/metrics'

describe('metrics calculations', () => {
  const metrics: Metrics = {
    activeUsers: 75,
    revenue: 2500,
    totalUsers: 100,
  }

  it('calculates active users as a percentage of total users', () => {
    expect(calculateActiveRate(metrics)).toBe(75)
  })

  it('calculates revenue per user', () => {
    expect(calculateAverageRevenue(metrics)).toBe(25)
  })

  it('returns zero when there are no users', () => {
    const emptyMetrics: Metrics = { activeUsers: 0, revenue: 0, totalUsers: 0 }

    expect(calculateActiveRate(emptyMetrics)).toBe(0)
    expect(calculateAverageRevenue(emptyMetrics)).toBe(0)
  })
})
