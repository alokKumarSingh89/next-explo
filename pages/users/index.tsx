import { IUser } from '@types'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Users = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="mx-auto  flex flex-wrap gap-1">
      {data?.map((user: IUser) => (
        <div className="w-1/4 p-10 shadow-lg shadow-gray-500/50">
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
