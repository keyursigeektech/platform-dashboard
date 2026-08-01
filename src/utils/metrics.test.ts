import { describe, expect, it } from 'vitest'
import { calculateActiveRate, calculateAverageRevenue } from './metrics'

describe('dashboard metric calculations', () => {
  it('calculates active users as a percentage of total users', () => {
    expect(calculateActiveRate({ totalUsers: 100, activeUsers: 40, revenue: 2000 })).toBe(40)
  })

  it('calculates average revenue per user', () => {
    expect(calculateAverageRevenue({ totalUsers: 100, activeUsers: 40, revenue: 2500 })).toBe(25)
  })

  it('returns zero for an empty user population', () => {
    const empty = { totalUsers: 0, activeUsers: 0, revenue: 0 }
    expect(calculateActiveRate(empty)).toBe(0)
    expect(calculateAverageRevenue(empty)).toBe(0)
  })
})
