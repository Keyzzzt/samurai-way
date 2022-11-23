import s from './MyPosts.module.css'
import { Post } from './Post/Post'
export const MyPosts = () => {
  return (
    <div className={s.container}>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
