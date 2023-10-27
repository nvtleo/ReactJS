import { MOVIES } from "./const"
const state_default = [

]

export const movieReducer = (state = state_default, action) => {
    switch (action.type) {
        case MOVIES.gheDangChon:
            state = action.payload
            return [...state]
        case MOVIES.gheDaDat:
            state = state.filter((content) => {
                return content !== action.payload
            })
            return [...state]
        default:
            return [...state]

    }
}
