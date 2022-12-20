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
    posts: Array<{
        id: number
        message: string
        likesCount: number
    }>
}
type SideBarPageType = {}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SideBarPageType
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
    },
    sidebar: {}
}