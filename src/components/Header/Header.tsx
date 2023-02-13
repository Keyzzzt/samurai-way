import s from './header.module.css'
import {FC} from "react";
import { Link, NavLink } from 'react-router-dom';

type HeaderProps = {
  login: string | undefined
}
export const Header: FC<HeaderProps> = ({login}) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh9Vlj-EKXiUExOatc4kIUj2baO04LghRKgvlehnxawz1FVz3WeaxWI31t6okGziJD_w&usqp=CAU" alt="logo" />
      {login ? login : <Link to='/login'>Login</Link>}
    </header>
  )
}
