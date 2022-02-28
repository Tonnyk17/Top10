import axios from "axios";

const initialState = {
    categories:[]
}

const GET_CATEGORIES = 'GET_CATEGORIES';

export const topReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES: 
            return {
                ...state,
                categories: action.payload
            }
        default: 
            return state
    }
}