import clsx from 'clsx'

type Variant = 'active' | 'inactive' | 'prospect' | 'complete' | 'on_hold' | 'lost' | 'advisory' | 'solution_delivery' | 'technical_services' | 'managed_services' | 'green' | 'yellow' | 'red' | 'high' | 'medium' | 'low' | 'hero'

const styles: Record<Variant, string> = {
  active: 'bg-emerald-100 text-emerald-800',
  inactive: 'bg-gray-100 text-gray-600',
  prospect: 'bg-amber-100 text-amber-800',
  complete: 'bg-blue-100 text-blue-800',
  on_hold: 'bg-orange-100 text-orange-800',
  lost: 'bg-red-100 text-red-700',
  advisory: 'bg-violet-100 text-violet-800',
  solution_delivery: 'bg-sky-100 text-sky-800',
  technical_services: 'bg-teal-100 text-teal-800',
  managed_services: 'bg-indigo-100 text-indigo-800',
  green: 'bg-emerald-100 text-emerald-700',
  yellow: 'bg-amber-100 text-amber-700',
  red: 'bg-red-100 text-red-700',
  high: 'bg-purple-100 text-purple-800',
  medium: 'bg-blue-100 text-blue-700',
  low: 'bg-gray-100 text-gray-600',
  hero: 'bg-amber-100 text-amber-800',
}

const labels: Record<Variant, string> = {
  active: 'Active',
  inactive: 'Inactive',
  prospect: 'Prospect',
  complete: 'Complete',
  on_hold: 'On Hold',
  lost: 'Lost',
  advisory: 'Advisory',
  solution_delivery: 'Solution Delivery',
  technical_services: 'Technical Services',
  managed_services: 'Managed Services',
  green: 'Strong',
  yellow: 'Moderate',
  red: 'At Risk',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  hero: 'Hero',
}

export default function Badge({ variant, label, className }: { variant: Variant; label?: string; className?: string }) {
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium', styles[variant], className)}>
      {label ?? labels[variant]}
    </span>
  )
}
