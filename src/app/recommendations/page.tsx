import { createServerClient } from '@/lib/supabase/server'
import ClientRecommendationsTable from './table.client'
import type { Rec } from '../../../types/recommendations'

export const revalidate = 60

export default async function Page() {
  const supabase = createServerClient()

 
 const { data, error } = await supabase
    .from('recommendations')
    .select('id,title,writer,bookshop,watch,category,rating,amazon')
    .order('id', { ascending: true })
    .overrideTypes<Rec[], { merge: false }>() 
    .throwOnError() 

  if (error) {
    return (
      <div className="p-6 text-red-600">Failed to load recommendations.</div>
    )
  }

  return <ClientRecommendationsTable initialData={data ?? []} />
}
