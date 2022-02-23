import { UPDATE_AVIS } from "../actions/types";

const initialState = {
    intervenants: [
        {
        id : 1,
        name :"mister one"
    },
        {
        id : 2,
        name :"mister two"
    },
        {
        id : 3,
        name :"mister three"
    }],
    client: [ {
        id : 1,
        name :"client one"
    },
        {
        id : 2,
        name :"client two"
    },
        {
        id : 3,
        name :"client three"
    }],
    
    InformationAvis: {
        intervenant: "",
        client : "",
        date : "",
        observation: ""
    }
    
};

export default function rootReducer(state = initialState, action) {
    

    switch (action.type) {
        case UPDATE_AVIS:
            let copyInfo = {...state.InformationAvis};
            copyInfo[action.payload.key] = action.payload.value;
           console.log(action.payload);
           console.log(action.payload.key);
            return{
                ...state,
                InformationAvis : copyInfo
            }
        
        default:
            return state;
    }
}