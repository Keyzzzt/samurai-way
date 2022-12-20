import s from "./Post.module.css"
import {FC} from "react";

type PostProps = {
  message: string
  likesCount: number
}
export const Post: FC<PostProps> = ({message, likesCount}) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxWjFGVymrq2OHNFkrCAXqx481fcnCPkXyA&usqp=CAU"
          alt="avatar"
        />
      </div>
      <div className={s.postMessage}>{message}</div>
      <div className={s.likesCount}>Likes: {likesCount}</div>
    </div>
  )
}
