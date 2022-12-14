import s from './Header.module.css'
import {FC} from "react";

type HeaderProps = {}
export const Header: FC<HeaderProps> = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh9Vlj-EKXiUExOatc4kIUj2baO04LghRKgvlehnxawz1FVz3WeaxWI31t6okGziJD_w&usqp=CAU" alt="logo" />
    </header>
  )
}
