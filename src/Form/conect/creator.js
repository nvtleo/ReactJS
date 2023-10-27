import { ReactFormConst } from "./const";

export const submitCreator = (payload) => ({
    type: ReactFormConst.Submit,
    payload,
});
export const deleteCreator = (payload) => ({
    type: ReactFormConst.Delete,
    payload: payload
});
export const eidtCreator = (payload) => ({
    type: ReactFormConst.Edit,
    payload,
});
export const updateCreator = (payload) => ({
    type: ReactFormConst.Update,
    payload,
});
