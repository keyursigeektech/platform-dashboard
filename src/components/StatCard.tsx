interface StatCardProps {
  label: string
  value: number
  format?: 'number' | 'percent' | 'currency'
  trend?: { direction: 'up' | 'down'; percentage: number }
}

export default function StatCard({ label, value, format = 'number', trend }: StatCardProps): JSX.Element {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: format === 'currency' ? 'currency' : 'decimal',
    currency: format === 'currency' ? 'USD' : undefined,
    minimumFractionDigits: format === 'number' ? 0 : 2,
    maximumFractionDigits: format === 'number' ? 0 : 2,
  }).format(value)

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight">{formattedValue}{format === 'percent' ? '%' : ''}</p>
      {trend ? <p className={`mt-3 text-sm font-medium ${trend.direction === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
        {trend.direction === 'up' ? '↑' : '↓'} {trend.percentage.toFixed(1)}% from last period
      </p> : null}
    </article>
  )
}
