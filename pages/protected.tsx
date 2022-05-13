import Layout from 'components/layout'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import AccessDenied from 'components/access-denied'
export default function ProtectedPage() {
  const { data: session, status } = useSession()
  const loading = status == 'loading'
  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch('/api/examples/protected')).json()
      if (res.content) {
        setContent(res.content)
      }
    }
    fetchData()
  }, [session])

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? '\u00a0'}</strong>
      </p>
    </Layout>
  )
}
