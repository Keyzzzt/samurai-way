import s from "./users.module.css"
import { FC } from "react"
import { UsersPageType } from "../../redux/reducers/usersReducer"
import { NavLink } from "react-router-dom"

type UserProps = {
  usersPage: UsersPageType
  followTC: (userId: number) => void
  unFollowTC: (userId: number) => void
  handleChangePage: (pageNr: number) => void
}

export const Users: FC<UserProps> = ({
  usersPage,
  followTC,
  unFollowTC,
  handleChangePage,
}) => {
  // const totalPages = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)
  const arr = Array.from(Array(10).keys())
  return (
    <div>
      <div className={s.pageNumbers}>
        {arr.map((el, i) => (
          <span
            key={i}
            onClick={() => handleChangePage(el + 1)}
            className={
              usersPage.currentPage === el + 1 ? s.activePage : undefined
            }
          >
            {el + 1}
          </span>
        ))}
      </div>
      {usersPage.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={`/profile/${u.id}`}>{u.name}</NavLink>
            <img src={u.photos.small ? u.photos.small : ""} alt="" />
            {u.followed ? (
              <button
                onClick={() => {
                  unFollowTC(u.id)
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                    followTC(u.id)
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
