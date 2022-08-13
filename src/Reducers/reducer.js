export const initialState = {   
    data : []

}

export const reducer = (state= initialState,action)=>{
    switch(action.type){
        case 'TEXT_FIELD':

        return {
            ...state,
            data : action.payload
        }

        default : return state
    }
}
