'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Plus, MapPin, Briefcase, Users } from 'lucide-react'
import { clients, getTeamMemberById, getEngagementsByClientId, getStakeholdersByClientId } from '@/lib/data'
import type { ClientStatus } from '@/lib/types'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'

const industries = ['All', ...Array.from(new Set(clients.map(c => c.industry))).sort()]
const statuses: (ClientStatus | 'all')[] = ['all', 'active', 'inactive', 'prospect']

const industryColors: Record<string, string> = {
  'Financial Services': '#003087',
  'Energy': '#D97706',
  'Healthcare': '#059669',
  'Manufacturing': '#7C3AED',
  'Government': '#0284C7',
  'Insurance': '#BE185D',
  'Higher Education': '#9333EA',
  'Information Services': '#0F766E',
  'Hospitality': '#DC2626',
}

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}

function getIndustryColor(industry: string) {
  return industryColors[industry] ?? '#64748B'
}

export default function ClientsView() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<ClientStatus | 'all'>('all')
  const [industryFilter, setIndustryFilter] = useState('All')

  const filtered = useMemo(() => {
    return clients
      .filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.industry.toLowerCase().includes(search.toLowerCase()) ||
          c.headquarters.toLowerCase().includes(search.toLowerCase())
        const matchStatus = statusFilter === 'all' || c.status === statusFilter
        const matchIndustry = industryFilter === 'All' || c.industry === industryFilter
        return matchSearch && matchStatus && matchIndustry
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [search, statusFilter, industryFilter])

  const activeCount = clients.filter(c => c.status === 'active').length
  const prospectCount = clients.filter(c => c.status === 'prospect').length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-sm text-gray-500 mt-1">
            {activeCount} active · {prospectCount} prospects · {clients.length} total
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium"
          style={{ backgroundColor: '#003087' }}
        >
          <Plus size={16} />
          Add Client
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients, industry, location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#003087' } as React.CSSProperties}
          />
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-gray-400" />
          <div className="flex gap-1.5">
            {statuses.map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${
                  statusFilter === s
                    ? 'text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
                style={statusFilter === s ? { backgroundColor: '#003087' } : {}}
              >
                {s === 'all' ? 'All Status' : s}
              </button>
            ))}
          </div>
        </div>

        <select
          value={industryFilter}
          onChange={e => setIndustryFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none cursor-pointer"
        >
          {industries.map(i => <option key={i}>{i}</option>)}
        </select>
      </div>

      {/* Results count */}
      {(search || statusFilter !== 'all' || industryFilter !== 'All') && (
        <p className="text-sm text-gray-500 mb-4">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
      )}

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(client => {
          const owner = getTeamMemberById(client.accountOwnerId)
          const engagements = getEngagementsByClientId(client.id)
          const activeEngagements = engagements.filter(e => e.status === 'active')
          const stakeholders = getStakeholdersByClientId(client.id)
          const heroes = stakeholders.filter(s => s.isHero)
          const color = getIndustryColor(client.industry)
          const initials = getInitials(client.name)

          return (
            <Link
              key={client.id}
              href={`/clients/${client.id}`}
              className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col gap-4"
            >
              {/* Top row: avatar + status */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <Badge variant={client.status} />
              </div>

              {/* Company name + industry */}
              <div>
                <h3 className="font-semibold text-gray-900 text-[15px] leading-snug group-hover:text-[#003087] transition-colors">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{client.industry}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <MapPin size={12} />
                <span className="truncate">{client.headquarters}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Stats row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} />
                    {activeEngagements.length > 0
                      ? <><span className="font-semibold text-gray-700">{activeEngagements.length}</span> active</>
                      : <><span className="font-semibold text-gray-400">{engagements.length}</span> total</>
                    }
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    <span className="font-semibold text-gray-700">{stakeholders.length}</span>
                    {heroes.length > 0 && (
                      <span className="text-amber-600 font-medium">· {heroes.length} ⭐</span>
                    )}
                  </span>
                </div>

                {/* Account owner */}
                {owner && (
                  <div title={owner.name}>
                    <Avatar initials={owner.initials} color={owner.avatarColor} size="sm" />
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No clients match your filters</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
