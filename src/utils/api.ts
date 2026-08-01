import type { Metrics } from './metrics'

export interface DashboardData {
  metrics: Metrics
  lastUpdated: Date
}

export interface User {
  id: string
  name: string
  email: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isMetrics(value: unknown): value is Metrics {
  return isRecord(value) && ['totalUsers', 'activeUsers', 'revenue'].every((key) => typeof value[key] === 'number' && Number.isFinite(value[key]))
}

async function fetchJson(url: string, signal?: AbortSignal): Promise<unknown> {
  const response = await fetch(url, { signal })
  if (!response.ok) throw new Error(`Request failed (${response.status})`)
  return response.json() as Promise<unknown>
}

export async function fetchDashboardData(signal?: AbortSignal): Promise<DashboardData> {
  const data = await fetchJson('/api/dashboard.json', signal)
  if (!isRecord(data) || !isMetrics(data.metrics) || typeof data.lastUpdated !== 'string') {
    throw new Error('Invalid dashboard response')
  }
  const lastUpdated = new Date(data.lastUpdated)
  if (Number.isNaN(lastUpdated.getTime())) throw new Error('Invalid dashboard timestamp')
  return { metrics: data.metrics, lastUpdated }
}

export async function fetchUser(id: string, signal?: AbortSignal): Promise<User> {
  const data = await fetchJson(`/api/users/${encodeURIComponent(id)}.json`, signal)
  if (!isRecord(data) || typeof data.id !== 'string' || typeof data.name !== 'string' || typeof data.email !== 'string') {
    throw new Error('Invalid user response')
  }
  return { id: data.id, name: data.name, email: data.email }
}
