interface StatCardProps {
  label: string
  value: number
  trend: {
    direction: 'up' | 'down'
    percentage: number
  }
}

export default function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value.toFixed(2)}</p>
      <span className={trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}>
        {trend.percentage}%
      </span>
    </div>
  )
}
