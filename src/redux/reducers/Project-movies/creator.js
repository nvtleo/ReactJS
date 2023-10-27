import { MOVIES } from "./const"

export const GHEDANGCHON = (payload) => {
    return {
        type: MOVIES.gheDangChon,
        payload,
    }
}

export const GHEDADAT = (payload) => {
    return {
        type: MOVIES.gheDaDat,
        payload,
    }
}