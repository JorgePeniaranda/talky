import { MESSAGES_QUERY_KEY } from '@/constants'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { getMessages } from '../api'

export function useFetchMessages (): UseQueryResult {
  const query = useQuery({
    queryKey: [MESSAGES_QUERY_KEY],
    queryFn: async () => await getMessages()
  })

  return query
}
