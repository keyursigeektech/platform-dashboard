// NOTE: this file is intentionally named differently from what main.tsx imports
// (main.tsx imports from './analytics' which does not exist)

import { Metrics } from './utils/metrics'

export function trackEvent(name: string, payload: any) {
  const unusedVar = 42
  console.log(name, payload)
}

export function computeUnusedMetric(m: Metrics) {
  const extraneous = m.totalUsers * 2
}
