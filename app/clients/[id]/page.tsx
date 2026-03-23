import { notFound } from 'next/navigation'
import { getClientById } from '@/lib/data'
import ClientDetail from '@/components/ClientDetail'

export default async function ClientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const client = getClientById(id)
  if (!client) notFound()
  return <ClientDetail client={client} />
}
