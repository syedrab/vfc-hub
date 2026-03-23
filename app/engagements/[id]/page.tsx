import { notFound } from 'next/navigation'
import { engagements } from '@/lib/data'
import EngagementDetail from '@/components/EngagementDetail'

export default async function EngagementPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const engagement = engagements.find(e => e.id === id)
  if (!engagement) notFound()
  return <EngagementDetail engagement={engagement} />
}
