
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
export type StateType = typeof store._state


export type RootStateType = {
    _state: {
        dialogsPage: DialogsPageType
        profilePage: ProfilePageType
        sidebar: SideBarPageType
    }
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    newPostTextHandler: (value: string) => void
    subscribe: (observer: (state: StateType)=>void) => void

}

export const store: RootStateType = {
    _state: {
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
        sidebar: {},
    },
    getState (){
        return this._state
    },
    _callSubscriber() {
        console.log('State changed');       
    },
    addPost (){
        const newPost: PostType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    newPostTextHandler(text: string){
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    subscribe(observerFn){
        this._callSubscriber = observerFn
    },
}