'use client'

import Link from 'next/link'
import { ChevronLeft, Calendar, DollarSign, Users, Building2, Star } from 'lucide-react'
import type { Engagement } from '@/lib/types'
import { getClientById, getTeamMemberById, getStakeholdersByClientId } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getInitials(name: string) {
  return name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase()
}

const serviceLabels: Record<string, string> = {
  advisory: 'Advisory',
  solution_delivery: 'Solution Delivery',
  technical_services: 'Technical Services',
  managed_services: 'Managed Services & Support',
}

const healthDot: Record<string, string> = {
  green: 'bg-emerald-500',
  yellow: 'bg-amber-400',
  red: 'bg-red-500',
}

export default function EngagementDetail({ engagement }: { engagement: Engagement }) {
  const client = getClientById(engagement.clientId)
  const teamMembers = engagement.teamMembers.map(tm => ({
    ...tm,
    member: getTeamMemberById(tm.memberId),
  }))
  const allStakeholders = client ? getStakeholdersByClientId(client.id) : []
  const involvedStakeholders = allStakeholders.filter(s =>
    engagement.stakeholderIds.includes(s.id)
  )

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-6 pb-7">
        <div className="flex items-center gap-2 mb-5 text-sm text-gray-400">
          <Link href="/engagements" className="hover:text-gray-700 transition-colors">Engagements</Link>
          <span>/</span>
          {client && (
            <>
              <Link href={`/clients/${client.id}`} className="hover:text-[#003087] transition-colors">{client.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-600">{engagement.name}</span>
        </div>

        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{engagement.name}</h1>
              <Badge variant={engagement.status} />
              <Badge variant={engagement.serviceType} />
            </div>
            {client && (
              <Link href={`/clients/${client.id}`} className="inline-flex items-center gap-1.5 text-sm text-[#003087] hover:underline font-medium">
                <Building2 size={14} />
                {client.name}
              </Link>
            )}
          </div>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
              <p className="text-xs text-gray-400">Team Members</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{involvedStakeholders.length}</p>
              <p className="text-xs text-gray-400">Stakeholders</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#003087' }}>
                {involvedStakeholders.filter(s => s.isHero).length}
              </p>
              <p className="text-xs text-gray-400">Heroes ⭐</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-7 grid grid-cols-3 gap-6">
        {/* Left — main content */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Engagement Summary</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{engagement.summary}</p>
          </div>

          {/* Technologies */}
          {engagement.technologies.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {engagement.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* VFC Team */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={15} className="text-gray-400" /> VFC Team
            </h3>
            <div className="space-y-3">
              {teamMembers.map(({ member, role }) => {
                if (!member) return null
                return (
                  <div key={member.id} className="flex items-center gap-3">
                    <Avatar initials={member.initials} color={member.avatarColor} size="md" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.title}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full font-medium">
                      {role}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Client Stakeholders */}
          {involvedStakeholders.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star size={15} className="text-gray-400" /> Client Stakeholders
              </h3>
              <div className="space-y-3">
                {involvedStakeholders.map(s => (
                  <div key={s.id} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${healthDot[s.relationshipHealth]}`} />
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold flex-shrink-0">
                      {getInitials(s.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                        {s.isHero && <Star size={13} className="text-amber-500" fill="currentColor" />}
                      </div>
                      <p className="text-xs text-gray-500">{s.title}</p>
                    </div>
                    <Badge variant={s.influenceLevel} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right — sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Service Type</p>
                <p className="text-sm font-medium text-gray-800">{serviceLabels[engagement.serviceType]}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Status</p>
                <Badge variant={engagement.status} />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Timeline</p>
                <div className="flex items-start gap-1.5 text-sm text-gray-700">
                  <Calendar size={13} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{formatDate(engagement.startDate)}</p>
                    <p className="text-gray-400">→ {engagement.endDate ? formatDate(engagement.endDate) : 'Present'}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Budget</p>
                <div className="flex items-center gap-1.5">
                  <DollarSign size={13} className="text-gray-400" />
                  <p className="text-sm font-semibold text-gray-900">{engagement.budget}</p>
                </div>
              </div>
              {client && (
                <div>
                  <p className="text-xs text-gray-400 mb-1">Client</p>
                  <Link href={`/clients/${client.id}`} className="text-sm font-medium text-[#003087] hover:underline">
                    {client.name}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Team avatars summary */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Team</h3>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map(({ member, role }) => member ? (
                <div key={member.id} title={`${member.name} · ${role}`}>
                  <Avatar initials={member.initials} color={member.avatarColor} size="sm" />
                </div>
              ) : null)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
