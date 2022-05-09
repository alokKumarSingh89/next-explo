import { FC } from 'react'
import Link from 'next/link'
import { IPost } from '@types'

const Post: FC<IPost> = ({ title, body, id }) => {
  return (
    <div className="box-shadow">
      <Link href={`/post/${id}`}>{title}</Link>
      <p>{body}</p>
    </div>
  )
}
export default Post
