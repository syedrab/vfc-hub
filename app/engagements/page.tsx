'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, DollarSign, Search } from 'lucide-react'
import { engagements, getClientById, getTeamMemberById } from '@/lib/data'
import type { EngagementStatus, ServiceType } from '@/lib/types'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'

const statuses: (EngagementStatus | 'all')[] = ['all', 'active', 'complete', 'on_hold', 'lost']
const serviceTypes: (ServiceType | 'all')[] = ['all', 'advisory', 'solution_delivery', 'technical_services', 'managed_services']

const serviceLabels: Record<string, string> = {
  all: 'All Types', advisory: 'Advisory', solution_delivery: 'Solution Delivery',
  technical_services: 'Technical Services', managed_services: 'Managed Services',
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'short' })
}

export default function EngagementsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<EngagementStatus | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<ServiceType | 'all'>('all')

  const filtered = useMemo(() => {
    return engagements.filter(e => {
      const client = getClientById(e.clientId)
      const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
        (client?.name.toLowerCase().includes(search.toLowerCase()) ?? false)
      const matchStatus = statusFilter === 'all' || e.status === statusFilter
      const matchType = typeFilter === 'all' || e.serviceType === typeFilter
      return matchSearch && matchStatus && matchType
    }).sort((a, b) => {
      if (a.status === 'active' && b.status !== 'active') return -1
      if (b.status === 'active' && a.status !== 'active') return 1
      return a.name.localeCompare(b.name)
    })
  }, [search, statusFilter, typeFilter])

  const activeCount = engagements.filter(e => e.status === 'active').length

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Engagements</h1>
        <p className="text-sm text-gray-500 mt-1">{activeCount} active · {engagements.length} total</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search engagements or clients..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${statusFilter === s ? 'text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'}`}
              style={statusFilter === s ? { backgroundColor: '#003087' } : {}}>
              {s === 'all' ? 'All Status' : s.replace('_', ' ')}
            </button>
          ))}
          <div className="w-px bg-gray-200 mx-1" />
          {serviceTypes.map(t => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${typeFilter === t ? 'text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'}`}
              style={typeFilter === t ? { backgroundColor: '#00A3A1' } : {}}>
              {serviceLabels[t]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(eng => {
          const client = getClientById(eng.clientId)
          const lead = eng.teamMembers[0] ? getTeamMemberById(eng.teamMembers[0].memberId) : null
          return (
            <Link key={eng.id} href={`/engagements/${eng.id}`} className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm hover:border-gray-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#003087]">{eng.name}</h3>
                    <Badge variant={eng.status} />
                    <Badge variant={eng.serviceType} />
                  </div>
                  {client && (
                    <Link href={`/clients/${client.id}`} className="text-xs text-[#003087] hover:underline font-medium mb-2 inline-block">
                      {client.name}
                    </Link>
                  )}
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">{eng.summary}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {formatDate(eng.startDate)}{eng.endDate ? ` → ${formatDate(eng.endDate)}` : ' → Present'}
                    </span>
                    <span className="flex items-center gap-1"><DollarSign size={11} />{eng.budget}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className="flex -space-x-2">
                    {eng.teamMembers.slice(0, 3).map(tm => {
                      const m = getTeamMemberById(tm.memberId)
                      return m ? <Avatar key={tm.memberId} initials={m.initials} color={m.avatarColor} size="sm" name={m.name} /> : null
                    })}
                    {eng.teamMembers.length > 3 && (
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-medium border-2 border-white">
                        +{eng.teamMembers.length - 3}
                      </div>
                    )}
                  </div>
                  {lead && <p className="text-xs text-gray-400">{lead.name}</p>}
                </div>
              </div>

              {eng.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-50">
                  {eng.technologies.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs text-gray-500">{t}</span>
                  ))}
                </div>
              )}
            </Link>
          )
        })}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="font-medium">No engagements match your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
