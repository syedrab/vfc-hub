import { vfcTeam, engagements, getClientById } from '@/lib/data'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">VFC Team</h1>
        <p className="text-sm text-gray-500 mt-1">{vfcTeam.length} consulting group members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {vfcTeam.map(member => {
          const memberEngagements = engagements.filter(e =>
            e.teamMembers.some(tm => tm.memberId === member.id)
          )
          const activeEngagements = memberEngagements.filter(e => e.status === 'active')
          const clientIds = Array.from(new Set(memberEngagements.map(e => e.clientId)))

          return (
            <div key={member.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={member.initials} color={member.avatarColor} size="lg" />
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.title}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-500">{member.practice}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">{activeEngagements.length}</p>
                  <p className="text-xs text-gray-400">Active</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">{memberEngagements.length}</p>
                  <p className="text-xs text-gray-400">Total</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">{clientIds.length}</p>
                  <p className="text-xs text-gray-400">Clients</p>
                </div>
              </div>

              {activeEngagements.length > 0 && (
                <div className="border-t border-gray-50 pt-3 space-y-1.5">
                  {activeEngagements.slice(0, 3).map(e => {
                    const client = getClientById(e.clientId)
                    const role = e.teamMembers.find(tm => tm.memberId === member.id)?.role
                    return (
                      <div key={e.id} className="flex items-center justify-between gap-2">
                        <Link href={`/clients/${e.clientId}`} className="text-xs text-[#003087] hover:underline truncate font-medium">
                          {client?.name}
                        </Link>
                        <span className="text-xs text-gray-400 flex-shrink-0">{role}</span>
                      </div>
                    )
                  })}
                  {activeEngagements.length > 3 && (
                    <p className="text-xs text-gray-400">+{activeEngagements.length - 3} more</p>
                  )}
                </div>
              )}

              <a href={`mailto:${member.email}`} className="block mt-3 text-xs text-gray-400 hover:text-[#003087] transition-colors">
                {member.email}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
