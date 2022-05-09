import { FC } from 'react'
import Link from 'next/link'
import { IPost } from '@types'
const split = (body: string) => {
  return body.substring(0, 80) + "..."
}
const Post: FC<IPost> = ({ title, body, id }) => {
  return (
    <div className="w-96 mx-auto bg-gray-100 shadow-md shadow-gray-500/50 mt-10 p-10 flex justify-center flex-col align-middle hover:scale-125 transition-all cursor-pointer">
      <h2 className="text-blue-500 font-semibold uppercase"><Link href={`/posts/${id}`} >{title}</Link></h2>
      <p>{split(body)}</p>
    </div>
  )
}
export default Post
