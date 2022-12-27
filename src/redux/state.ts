import { navbarReducer } from './reducers/navbarReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { profileReducer } from './reducers/profileReducer';
import { ADD_POST, ADD_MESSAGE, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_TEXT } from './actionTypes';

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type MessageType = {
  id: number
  message: string
}
export type DialogsPageType = {
  messages: MessageType[]
  dialogs: Array<{
    id: number
    name: string
  }>
  newMessageText: string
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}
export type NavBarType = {}
export type NavbarPageType = {}
export type StateType = typeof store._state
export type RootStateType = {
  _state: {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    navbar: NavbarPageType
  }
  getState: () => StateType
  _callSubscriber: (state: StateType) => void
  subscribe: (observer: (state: StateType) => void) => void
  dispatch: (action: ActionType) => void
}
export type ActionType = {
  type: string
  payload?: any
}

export const store: RootStateType = {
  _state: {
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hola" },
        { id: 3, message: "Hej" },
      ],
      dialogs: [
        { id: 1, name: "Mark" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Kote" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hello, I'm frontend developer!", likesCount: 4 },
        { id: 2, message: "I also familiar with backend!", likesCount: 44 },
        { id: 3, message: "When I start work for you?", likesCount: 444 },
      ],
      newPostText: "",
    },
    navbar: {},
  },
  _callSubscriber() {
    console.log("State changed")
  },

  getState() {
    return this._state
  },
  subscribe(observerFn) {
    this._callSubscriber = observerFn
  },
  dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber(this._state)

    }
  }



