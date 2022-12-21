
type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogsPageType = {
    messages: Array<{
        id: number
        message: string
    }>
    dialogs: Array<{
        id: number
        name: string
    }>
}
type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type SideBarPageType = {}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SideBarPageType
}

let reRender = () => {
    console.log('State changed');
    
}

export const state: RootStateType = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hola'},
            {id: 3, message: 'Hej'},
        ],
        dialogs: [
            {id: 1, name: 'Mark'},
            {id: 2, name: 'Igor'},
            {id: 3, name: 'Kote'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, I\'m frontend developer!', likesCount: 4},
            {id: 2, message: 'I also familiar with backend!', likesCount: 44},
            {id: 3, message: 'When I start work for you?', likesCount: 444},
        ],
        newPostText: ''
    },
    sidebar: {}
}

export const addPost = (): void => {
    const newPost: PostType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    reRender()
}
export const newPostTextHandler = (text: string) => {
    state.profilePage.newPostText = text
    reRender()
}
export const subscribe = (observerFn: () => void) => {
    reRender = observerFn
}