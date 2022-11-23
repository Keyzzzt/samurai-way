import s from './MyPosts.module.css'
import { Post } from './Post/Post'
export const MyPosts = () => {
  return (
    <div className={s.container}>
        <div className={s.addPost}>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      <div>
        <Post message={'Hello, I\'m frontend developer!'} likesCount={23}/>
        <Post message={'I also familiar with backend!'} likesCount={11}/>
        <Post message={'When I start work for you?'} likesCount={99}/>
      </div>
    </div>
  )
}
