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
        <Post message={'Hello, I\'m frontend developer!'}/>
        <Post message={'I also familiar with backend'}/>
        <Post message={'When I start work for you?'}/>
      </div>
    </div>
  )
}
