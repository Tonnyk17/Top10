
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