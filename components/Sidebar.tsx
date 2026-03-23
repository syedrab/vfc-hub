'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, Briefcase, LayoutDashboard, UserCheck } from 'lucide-react'
import clsx from 'clsx'

const nav = [
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/engagements', label: 'Engagements', icon: Briefcase },
  { href: '/team', label: 'VFC Team', icon: UserCheck },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col h-full" style={{ backgroundColor: '#001F5A' }}>
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#00A3A1' }}>
            VF
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">VersaFile</p>
            <p className="text-white/50 text-xs leading-tight">Client Hub</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
              style={active ? { backgroundColor: '#00A3A1' } : {}}
            >
              <Icon size={17} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/10">
        <p className="text-white/30 text-xs">Consulting Group</p>
        <p className="text-white/50 text-xs font-medium">Internal Use Only</p>
      </div>
    </aside>
  )
}
