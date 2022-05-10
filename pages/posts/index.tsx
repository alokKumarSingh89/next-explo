import React from 'react'
import { Post } from 'components'
import { IPost } from '@types'
interface IProps {
  data: IPost[]
}
const Posts: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mx-auto mt-10 flex w-2/3 flex-wrap gap-1">
      {data.map((item) => (
        <Post {...item} key={item.id} />
      ))}
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { props: { data } }
}
export default Posts
