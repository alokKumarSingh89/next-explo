import { IPost } from "@types";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC } from "react";

const Post: FC<IPost> = ({ title, body }) => {
    return (
        <div className="w-1/3 mx-auto mt-10 shadow-lg shadow-gray-500/50 p-10 h-fit">
            <button className="text-blue-400"><Link href="/posts">Back</Link></button>
            <div className="mt-10">
                <h2 className="uppercase font-extrabold text-blue-700">{title}</h2>
                <p className="mt-5 capitalize">{body}</p>
            </div>
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query: { postId } } = context;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    const data: IPost = await res.json()

    return { props: { title: data.title, body: data.body } }
}
export default Post;