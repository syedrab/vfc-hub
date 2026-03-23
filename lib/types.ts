export type ClientStatus = 'active' | 'inactive' | 'prospect'
export type EngagementStatus = 'active' | 'on_hold' | 'complete' | 'lost'
export type ServiceType = 'advisory' | 'solution_delivery' | 'technical_services' | 'managed_services'
export type InfluenceLevel = 'high' | 'medium' | 'low'
export type RelationshipHealth = 'green' | 'yellow' | 'red'

export interface VFCTeamMember {
  id: string
  name: string
  title: string
  email: string
  practice: string
  initials: string
  avatarColor: string
}

export interface Technology {
  id: string
  name: string
}

export interface Stakeholder {
  id: string
  clientId: string
  name: string
  title: string
  email: string
  phone?: string
  influenceLevel: InfluenceLevel
  relationshipHealth: RelationshipHealth
  notes?: string
  isHero: boolean
  heroReason?: string
  heroMaintenanceNotes?: string
}

export interface EngagementTeamMember {
  memberId: string
  role: string
}

export interface Engagement {
  id: string
  clientId: string
  name: string
  serviceType: ServiceType
  status: EngagementStatus
  startDate: string
  endDate?: string
  summary: string
  budget: string
  technologies: string[]
  teamMembers: EngagementTeamMember[]
  stakeholderIds: string[]
}

export interface ActivityLogEntry {
  id: string
  clientId: string
  authorName: string
  authorInitials: string
  note: string
  createdAt: string
}

export interface NewsItem {
  title: string
  source: string
  date: string
  summary: string
}

export interface Client {
  id: string
  name: string
  industry: string
  size: string
  headquarters: string
  website?: string
  status: ClientStatus
  accountOwnerId: string
  totalSpend: string
  description: string
  technologies: string[]
  recentNews?: NewsItem[]
}
