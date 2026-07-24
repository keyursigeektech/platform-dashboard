interface StatCardProps {
  label: string
  value: number
  format?: 'number' | 'percent' | 'currency'
  trend?: {
    direction: 'up' | 'down'
    percentage: number
  }
}

const formatters = {
  number: new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }),
  percent: new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    style: 'percent',
  }),
  currency: new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 2,
    style: 'currency',
  }),
}

export default function StatCard({
  label,
  value,
  format = 'number',
  trend,
}: StatCardProps) {
  const displayValue = formatters[format].format(format === 'percent' ? value / 100 : value)

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{displayValue}</p>
      {trend ? (
        <span className={trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}>
          {trend.direction === 'up' ? '▲' : '▼'} {trend.percentage}%
        </span>
      ) : null}
    </article>
  )
}
