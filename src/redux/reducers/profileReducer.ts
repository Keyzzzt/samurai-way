import { InferActionTypes, BaseThunkType } from "./../../types"

type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type ProfilePageType = typeof initialState

export type ProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    github: string
    mainLink: string
    youtube: string
  }
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: {
    small: string
    large: string
  }
  userId: number
}

const initialState = {
  profile: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      github: "",
      mainLink: "",
      youtube: "",
    },
    fullName: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    photos: {
      small: "",
      large: "",
    },
    userId: 0,
  },
  posts: [
    { id: 1, message: "Hello, I'm frontend developer!", likesCount: 4 },
    { id: 2, message: "I also familiar with backend!", likesCount: 44 },
    { id: 3, message: "When I start work for you?", likesCount: 444 },
  ],
  newPostText: "",
}

export const profileReducer = (
  state = initialState,
  action: ActionType
): ProfilePageType => {
  switch (action.type) {
    case "SET_PROFILE":
      return {...state, profile: action.payload}
    case "ADD_POST":
      const newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      }
      return { ...state, posts: [newPost, ...state.posts], newPostText: "" }
    case "UPDATE_NEW_POST_TEXT":
      return { ...state, newPostText: action.payload }
    default:
      return state
  }
}

export const actions = {
  setProfileAC: (profile: ProfileType) => ({
    type: "SET_PROFILE" as const,
    payload: profile,
  }),
  addPostAC: () => ({ type: "ADD_POST" as const }),
  updateNewPostTextAC: (text: string) => ({
    type: "UPDATE_NEW_POST_TEXT" as const,
    payload: text,
  }),
}
