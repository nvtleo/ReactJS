import { ReactFormConst } from "./const";

const stateDefault = {
    listSV: [],
    listSVEdit: null,
};
export const reactFormReducer = (state = stateDefault, action) => {
    console.log(action, "action")
    switch (action.type) {
        case ReactFormConst.Submit:
            const newListSV = [...state.listSV];
            newListSV.push(action.payload);
            state.listSV = newListSV;
            return { ...state };
        case ReactFormConst.Delete:
            const newList = state.listSV.filter((sv) => sv.id !== action.payload);
            state.listSV = newList
            return { ...state };
        case ReactFormConst.Edit:
            state.listSVEdit = action.payload
            return { ...state };
        case ReactFormConst.Update:
            const newListUpdate = [...state.listSV];
            const index = state.listSV.findIndex((sv) => sv.id === action.payload.id);
            newListUpdate.splice(index, 1, action.payload);
            state.listSV = newListUpdate;
            state.listSVEdit = null;
            return { ...state }
        default:
            return state;
    }
};
