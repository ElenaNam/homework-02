const initState = {
    themeId: 1,
}
export type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: {type: string, id: number}): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: +action.id}
        }
            
        default:
            return state
    }
}

export const changeThemeId = (id: number): {type: string, id: number} => ({ type: 'SET_THEME_ID', id }) // fix any

