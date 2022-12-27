import { UPDATE_NEW_POST_TEXT } from './../actionTypes';
import { ProfilePageType } from '../state';
import { ADD_POST } from '../actionTypes';
import { ActionType, PostType } from '../state';

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch(action.type) {
        case ADD_POST:
            const newPost: PostType = {
              id: 4,
              message: state.newPostText,
              likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
            case UPDATE_NEW_POST_TEXT:
              state.newPostText = action.payload
              return state
          default: 
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
})