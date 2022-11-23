import s from './Navbar.module.css'

export const Navbar = () => {
  console.log(s);
  
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#">News</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
    </nav>
  )
}
