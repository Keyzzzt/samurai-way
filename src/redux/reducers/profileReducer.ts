import { UPDATE_NEW_POST_TEXT } from '../constants';
import { ADD_POST } from '../constants';
import { ActionType } from '../../types';

type InitialStateType = typeof initialState

const initialState = {
  posts: [
    { id: 1, message: "Hello, I'm frontend developer!", likesCount: 4 },
    { id: 2, message: "I also familiar with backend!", likesCount: 44 },
    { id: 3, message: "When I start work for you?", likesCount: 444 },
  ],
  newPostText: "",
}

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
              id: 4,
              message: state.newPostText,
              likesCount: 0,
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
            case UPDATE_NEW_POST_TEXT:
              return {...state, newPostText: action.payload}
          default: 
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
})