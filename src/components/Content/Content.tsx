import s from './Content.module.css'
export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.contentImage}>
        <img src="https://imageio.forbes.com/specials-images/imageserve/6060f8b5b0d4032713a5f74f/0x0.jpg?format=jpg&width=1200" alt="img" />
      </div>
      <div>ava + desc</div>
      <div>My Posts
        <div>
          New Post
        </div>
      </div>
      <div>
        <div>Post1</div>
        <div>Post2</div>
        <div>Post3</div>
      </div>
    </div>
  )
}
