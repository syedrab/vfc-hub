import { clients, engagements, stakeholders } from '@/lib/data'

function StatCard({ label, value, sub, color }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</p>
      <p className="text-3xl font-bold" style={{ color: color ?? '#0F172A' }}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  )
}

export default function DashboardPage() {
  const activeClients = clients.filter(c => c.status === 'active').length
  const inactiveClients = clients.filter(c => c.status === 'inactive').length
  const prospectClients = clients.filter(c => c.status === 'prospect').length
  const activeEngagements = engagements.filter(e => e.status === 'active').length
  const heroes = stakeholders.filter(s => s.isHero).length

  // Clients by industry
  const byIndustry = clients.reduce<Record<string, number>>((acc, c) => {
    acc[c.industry] = (acc[c.industry] ?? 0) + 1
    return acc
  }, {})

  // Engagements by service type
  const byType = engagements.reduce<Record<string, number>>((acc, e) => {
    const labels: Record<string, string> = {
      advisory: 'Advisory', solution_delivery: 'Solution Delivery',
      technical_services: 'Technical Services', managed_services: 'Managed Services',
    }
    const label = labels[e.serviceType]
    acc[label] = (acc[label] ?? 0) + 1
    return acc
  }, {})

  // Engagements by status
  const byStatus = engagements.reduce<Record<string, number>>((acc, e) => {
    acc[e.status] = (acc[e.status] ?? 0) + 1
    return acc
  }, {})

  // Technologies most used
  const techCounts = engagements.flatMap(e => e.technologies).reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] ?? 0) + 1
    return acc
  }, {})
  const topTech = Object.entries(techCounts).sort((a, b) => b[1] - a[1]).slice(0, 8)

  const barColor = '#003087'
  const tealColor = '#00A3A1'

  const maxIndustry = Math.max(...Object.values(byIndustry))
  const maxType = Math.max(...Object.values(byType))
  const maxTech = topTech[0]?.[1] ?? 1

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">VFC Consulting Group — at a glance</p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Clients" value={clients.length} sub={`${activeClients} active · ${prospectClients} prospects`} color="#003087" />
        <StatCard label="Active Engagements" value={activeEngagements} sub={`${engagements.length} total engagements`} color="#00A3A1" />
        <StatCard label="Client Heroes" value={heroes} sub="Internal champions" color="#D97706" />
        <StatCard label="Prospects" value={prospectClients} sub={`${inactiveClients} inactive`} color="#7C3AED" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Clients by industry */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Clients by Industry</h3>
          <div className="space-y-3">
            {Object.entries(byIndustry).sort((a, b) => b[1] - a[1]).map(([industry, count]) => (
              <div key={industry} className="flex items-center gap-3">
                <p className="text-xs text-gray-600 w-36 flex-shrink-0">{industry}</p>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-2 rounded-full transition-all" style={{ width: `${(count / maxIndustry) * 100}%`, backgroundColor: barColor }} />
                </div>
                <p className="text-xs font-semibold text-gray-700 w-4 text-right">{count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagements by service type */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Engagements by Service Type</h3>
          <div className="space-y-3">
            {Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([type, count]) => (
              <div key={type} className="flex items-center gap-3">
                <p className="text-xs text-gray-600 w-36 flex-shrink-0">{type}</p>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-2 rounded-full transition-all" style={{ width: `${(count / maxType) * 100}%`, backgroundColor: tealColor }} />
                </div>
                <p className="text-xs font-semibold text-gray-700 w-4 text-right">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagements by status */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Engagement Status Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(byStatus).map(([status, count]) => {
              const colors: Record<string, string> = { active: '#059669', complete: '#0284C7', on_hold: '#D97706', lost: '#DC2626' }
              const labels: Record<string, string> = { active: 'Active', complete: 'Complete', on_hold: 'On Hold', lost: 'Lost' }
              return (
                <div key={status} className="text-center p-4 rounded-xl" style={{ backgroundColor: colors[status] + '15' }}>
                  <p className="text-3xl font-bold" style={{ color: colors[status] }}>{count}</p>
                  <p className="text-xs text-gray-500 mt-1">{labels[status]}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Top technologies */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Most Used Technologies</h3>
          <div className="space-y-3">
            {topTech.map(([tech, count]) => (
              <div key={tech} className="flex items-center gap-3">
                <p className="text-xs text-gray-600 w-40 flex-shrink-0 truncate">{tech}</p>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-2 rounded-full" style={{ width: `${(count / maxTech) * 100}%`, backgroundColor: '#7C3AED' }} />
                </div>
                <p className="text-xs font-semibold text-gray-700 w-4 text-right">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
