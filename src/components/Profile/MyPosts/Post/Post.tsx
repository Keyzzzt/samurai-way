import s from "./Post.module.css"

type PostPropsType = {
  message: string
}
export const Post = ({message}: PostPropsType) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxWjFGVymrq2OHNFkrCAXqx481fcnCPkXyA&usqp=CAU"
          alt="avatar"
        />
      </div>
      <div className={s.postMessage}>{message}</div>
    </div>
  )
}
