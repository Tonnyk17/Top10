
const initialState = {
    categories:[],
    isTable: false
}

const GET_CATEGORIES = 'GET_CATEGORIES';
const TOGGLE_VIEW = 'TOGGLE_VIEW';

export const topReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES: 
            return {
                ...state,
                categories: action.payload
            }
        case TOGGLE_VIEW:
            return {
                ...state,
                isTable: !state.isTable
            }
        default: 
            return state
    }
}

export const getCategories = () => async(dispatch) => {
    try {
        await fetch('https://top10-5e3d8-default-rtdb.firebaseio.com/.json')
        .then(response => response.json())
        .then(data => dispatch({
            type:GET_CATEGORIES,
            payload: data.categories
        }))
    } catch (error) {
        console.log(error)
    }
}

export const toggleView = () => (dispatch) => {
    dispatch({
        type: TOGGLE_VIEW
    })
}


