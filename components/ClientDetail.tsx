'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Globe, MapPin, Building2, DollarSign, Star, Calendar, Send, Newspaper, ExternalLink } from 'lucide-react'
import type { Client } from '@/lib/types'
import {
  getEngagementsByClientId, getStakeholdersByClientId,
  getActivityByClientId, getTeamMemberById, vfcTeam
} from '@/lib/data'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'

const tabs = ['Overview', 'Projects', 'Stakeholders & Heroes', 'VFC Team', 'Activity']

const industryColors: Record<string, string> = {
  'Financial Services': '#003087', 'Energy': '#D97706', 'Healthcare': '#059669',
  'Manufacturing': '#7C3AED', 'Government': '#0284C7', 'Insurance': '#BE185D',
  'Higher Education': '#9333EA', 'Information Services': '#0F766E', 'Hospitality': '#DC2626',
}

function getInitials(name: string) {
  return name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase()
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days}d ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}yr ago`
}

const serviceLabels: Record<string, string> = {
  advisory: 'Advisory',
  solution_delivery: 'Solution Delivery',
  technical_services: 'Technical Services',
  managed_services: 'Managed Services',
}

const healthDot: Record<string, string> = { green: 'bg-emerald-500', yellow: 'bg-amber-400', red: 'bg-red-500' }

export default function ClientDetail({ client }: { client: Client }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const [noteText, setNoteText] = useState('')

  const engagements = getEngagementsByClientId(client.id)
  const stakeholders = getStakeholdersByClientId(client.id)
  const heroes = stakeholders.filter(s => s.isHero)
  const activity = getActivityByClientId(client.id)
  const owner = getTeamMemberById(client.accountOwnerId)
  const color = industryColors[client.industry] ?? '#64748B'
  const initials = getInitials(client.name)
  const activeEngagements = engagements.filter(e => e.status === 'active')

  // Unique VFC team members across all engagements
  const teamMemberIds = Array.from(new Set(engagements.flatMap(e => e.teamMembers.map(m => m.memberId))))
  const teamMembers = teamMemberIds.map(id => vfcTeam.find(t => t.id === id)).filter(Boolean)

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="px-8 pt-6 pb-0">
          <Link href="/clients" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-5">
            <ChevronLeft size={15} />
            All Clients
          </Link>

          <div className="flex items-start gap-5 mb-6">
            {/* Company avatar */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
              style={{ backgroundColor: color }}
            >
              {initials}
            </div>

            {/* Company info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
                <Badge variant={client.status} />
              </div>
              <div className="flex items-center gap-4 mt-1.5 text-sm text-gray-500 flex-wrap">
                <span className="flex items-center gap-1"><Building2 size={13} />{client.industry}</span>
                <span className="flex items-center gap-1"><MapPin size={13} />{client.headquarters}</span>
                {client.website && (
                  <a href={`https://${client.website}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#003087]">
                    <Globe size={13} />{client.website}
                  </a>
                )}
              </div>
            </div>

            {/* Key stats */}
            <div className="flex gap-6 text-center flex-shrink-0">
              <div>
                <p className="text-2xl font-bold text-gray-900">{activeEngagements.length}</p>
                <p className="text-xs text-gray-500">Active Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stakeholders.length}</p>
                <p className="text-xs text-gray-500">Contacts</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#003087' }}>{heroes.length}</p>
                <p className="text-xs text-gray-500">Heroes ⭐</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-100 -mb-px">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#003087] text-[#003087]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-8 py-7">

        {/* ── OVERVIEW ── */}
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {client.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {client.recentNews && client.recentNews.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Newspaper size={14} className="text-gray-400" /> Company News
                  </h3>
                  <div className="space-y-4">
                    {client.recentNews.map((item, i) => (
                      <div key={i} className={`pb-4 ${i < client.recentNews!.length - 1 ? 'border-b border-gray-50' : ''}`}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-sm font-medium text-gray-900 leading-snug">{item.title}</p>
                          <ExternalLink size={12} className="text-gray-300 flex-shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.summary}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="font-medium">{item.source}</span>
                          <span>·</span>
                          <span>{new Date(item.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Account Owner</p>
                    {owner && (
                      <div className="flex items-center gap-2">
                        <Avatar initials={owner.initials} color={owner.avatarColor} size="sm" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{owner.name}</p>
                          <p className="text-xs text-gray-500">{owner.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Total Spend</p>
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={13} className="text-gray-400" />
                      <p className="text-sm font-semibold text-gray-900">{client.totalSpend}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Company Size</p>
                    <p className="text-sm text-gray-700">{client.size} employees</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Engagements</p>
                    <p className="text-sm text-gray-700">{engagements.length} total · {activeEngagements.length} active</p>
                  </div>
                </div>
              </div>

              {heroes.length > 0 && (
                <div className="bg-amber-50 rounded-xl border border-amber-100 p-5">
                  <h3 className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">⭐ Heroes</h3>
                  <div className="space-y-3">
                    {heroes.map(h => (
                      <div key={h.id} className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-xs font-bold flex-shrink-0 mt-0.5">
                          {getInitials(h.name)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{h.name}</p>
                          <p className="text-xs text-gray-500">{h.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PROJECTS ── */}
        {activeTab === 'Projects' && (
          <div className="space-y-4">
            {engagements.length === 0 && <p className="text-sm text-gray-500">No engagements yet.</p>}
            {engagements.map(eng => {
              const lead = eng.teamMembers[0] ? getTeamMemberById(eng.teamMembers[0].memberId) : null
              return (
                <Link key={eng.id} href={`/engagements/${eng.id}`} className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-gray-200 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="font-semibold text-gray-900">{eng.name}</h3>
                        <Badge variant={eng.status} />
                        <Badge variant={eng.serviceType} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{eng.summary}</p>

                      <div className="flex items-center gap-6 text-xs text-gray-500 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(eng.startDate)}{eng.endDate ? ` → ${formatDate(eng.endDate)}` : ' → Present'}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={12} />
                          {eng.budget}
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs text-gray-400 mb-2">Team</p>
                      <div className="flex -space-x-2 justify-end">
                        {eng.teamMembers.slice(0, 4).map(tm => {
                          const member = getTeamMemberById(tm.memberId)
                          return member ? (
                            <Avatar key={tm.memberId} initials={member.initials} color={member.avatarColor} size="sm" name={`${member.name} · ${tm.role}`} />
                          ) : null
                        })}
                        {eng.teamMembers.length > 4 && (
                          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium border-2 border-white">
                            +{eng.teamMembers.length - 4}
                          </div>
                        )}
                      </div>
                      {lead && <p className="text-xs text-gray-400 mt-1">{lead.name}</p>}
                    </div>
                  </div>

                  {eng.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-50">
                      {eng.technologies.map(tech => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs text-gray-600">{tech}</span>
                      ))}
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        )}

        {/* ── STAKEHOLDERS & HEROES ── */}
        {activeTab === 'Stakeholders & Heroes' && (
          <div className="space-y-6">
            {heroes.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star size={15} className="text-amber-500" fill="currentColor" /> Heroes
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {heroes.map(h => (
                    <div key={h.id} className="bg-amber-50 rounded-xl border border-amber-100 p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-sm font-bold flex-shrink-0">
                          {getInitials(h.name)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-900">{h.name}</p>
                            <Badge variant="hero" />
                          </div>
                          <p className="text-xs text-gray-600">{h.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{h.email}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant={h.influenceLevel} />
                        </div>
                      </div>
                      {h.heroReason && (
                        <div className="mb-3">
                          <p className="text-xs font-medium text-amber-800 mb-1">Why they&apos;re a hero</p>
                          <p className="text-xs text-gray-700 leading-relaxed">{h.heroReason}</p>
                        </div>
                      )}
                      {h.heroMaintenanceNotes && (
                        <div>
                          <p className="text-xs font-medium text-amber-800 mb-1">How we maintain the relationship</p>
                          <p className="text-xs text-gray-700 leading-relaxed">{h.heroMaintenanceNotes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-3">All Stakeholders</h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {stakeholders.length === 0 && (
                  <p className="text-sm text-gray-500 p-6">No stakeholders added yet.</p>
                )}
                {stakeholders.map((s, i) => (
                  <div key={s.id} className={`flex items-center gap-4 px-6 py-4 ${i > 0 ? 'border-t border-gray-50' : ''}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${healthDot[s.relationshipHealth]}`} />
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold flex-shrink-0">
                      {getInitials(s.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-900">{s.name}</p>
                        {s.isHero && <Star size={13} className="text-amber-500" fill="currentColor" />}
                      </div>
                      <p className="text-xs text-gray-500">{s.title}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant={s.influenceLevel} />
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        s.relationshipHealth === 'green' ? 'bg-emerald-50 text-emerald-700' :
                        s.relationshipHealth === 'yellow' ? 'bg-amber-50 text-amber-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        {s.relationshipHealth === 'green' ? 'Strong' : s.relationshipHealth === 'yellow' ? 'Moderate' : 'At Risk'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 hidden lg:block">{s.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── VFC TEAM ── */}
        {activeTab === 'VFC Team' && (
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            {teamMembers.length === 0 && <p className="text-sm text-gray-500 p-6">No team members assigned.</p>}
            {teamMembers.map((member, i) => {
              if (!member) return null
              const roles = engagements
                .flatMap(e => e.teamMembers.filter(tm => tm.memberId === member.id).map(tm => ({ engName: e.name, role: tm.role, status: e.status })))
              return (
                <div key={member.id} className={`flex items-center gap-4 px-6 py-4 ${i > 0 ? 'border-t border-gray-50' : ''}`}>
                  <Avatar initials={member.initials} color={member.avatarColor} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {roles.map((r, ri) => (
                      <span key={ri} className={`text-xs px-2 py-0.5 rounded-full border ${r.status === 'active' ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-gray-50 border-gray-100 text-gray-500'}`}>
                        {r.role} · {r.engName}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 hidden md:block">{member.email}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* ── ACTIVITY ── */}
        {activeTab === 'Activity' && (
          <div className="max-w-2xl space-y-6">
            {/* Add note */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <textarea
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                placeholder="Add a note — meeting summary, relationship update, key decision..."
                rows={3}
                className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:border-transparent placeholder:text-gray-400"
                style={{ '--tw-ring-color': '#003087' } as React.CSSProperties}
              />
              <div className="flex justify-end mt-3">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium disabled:opacity-40"
                  style={{ backgroundColor: '#003087' }}
                  disabled={!noteText.trim()}
                >
                  <Send size={14} />
                  Add Note
                </button>
              </div>
            </div>

            {/* Log entries */}
            <div className="space-y-4">
              {activity.length === 0 && <p className="text-sm text-gray-500">No activity yet.</p>}
              {activity.map(entry => (
                <div key={entry.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {entry.authorInitials}
                    </div>
                    <div className="w-px bg-gray-100 flex-1 mt-2" />
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <p className="text-sm font-semibold text-gray-900">{entry.authorName}</p>
                      <p className="text-xs text-gray-400">{timeAgo(entry.createdAt)} · {formatDate(entry.createdAt)}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{entry.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
