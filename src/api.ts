import { UserInfoType } from './redux/reducers/userInfoReducer';
import { UserType } from './redux/reducers/usersReducer';
import  axios  from 'axios';
import { ProfileType } from './redux/reducers/profileReducer';
const baseRequest = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cab76437-6f35-4448-8460-bf38d7570300'
    }
})
type FollowUnfollowType = {
    resultCode: number
    messages: string[],
    data: {}
}

type GetUsersType = {
    items: UserType[]
    totalCount: number,
    error: null | string
  }
type AuthMeType = {
    resultCode: number
    messages: string[]
    data: UserInfoType
}
export const API = {
    getUsers: (currentPage: number, pageSize: number) => {
        return baseRequest.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            console.log(res.data)
            return res.data
            
        })
    },
    follow: (userId: number) => {
        return baseRequest.post<FollowUnfollowType>(`follow/${userId}`).then(res => res.data)
    },
    unFollow: (userId: number) => {
        return baseRequest.delete<FollowUnfollowType>(`follow/${userId}`).then(res => res.data)
    },
    authMe: () => {
        return baseRequest.get<AuthMeType>(`auth/me`).then(res => res.data)

    },
    getProfile: (userId: number) => {
        return baseRequest.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    }
}