import s from './Navbar.module.css'

export const Navbar = () => {
  console.log(s);
  
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">Dialogs</a>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
    </nav>
  )
}
