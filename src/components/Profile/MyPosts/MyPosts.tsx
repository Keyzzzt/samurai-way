import s from './MyPosts.module.css'
import { Post } from './Post/Post'
export const MyPosts = () => {
  const postsData = [
    { id: 1, message: 'Hello, I\'m frontend developer!', likesCount: 4 },
    { id: 2, message: 'I also familiar with backend!', likesCount: 44 },
    { id: 3, message: 'When I start work for you?', likesCount: 444 },
  ]
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
        {postsData.map(el => {
          return (
            <div key={el.id}>
              <Post message={el.message} likesCount={el.likesCount}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
