import { UPDATE_AVIS } from "./types";

export const updateAvis = (key , value) =>{
    return{
        type: UPDATE_AVIS,
        payload : {
            key,
            value
        }
    }
}
