import { useEffect } from 'react'
import useSWR from 'swr'
import { User } from 'pages/api/user'
import Router from 'next/router'
export default function useUser({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User>('/api/user')
  useEffect(() => {
    if (!redirectTo || !user) return
    if (
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, user])

  return { user, mutateUser }
}
