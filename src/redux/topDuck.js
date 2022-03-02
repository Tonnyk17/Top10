
const initialState = {
    categories:[],
    isTable: false
}

const GET_CATEGORIES = 'GET_CATEGORIES';
const TOGGLE_VIEW = 'TOGGLE_VIEW';
const WRITE_REVIEW = 'WRITE_REVIEW';

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
        case WRITE_REVIEW:
                const newList = [...state.categories];
                const categoryFilter = newList.find(item => 
                    item.type === action.payload.item.category
                    );

                const itemFilter = categoryFilter.items.find(item => 
                    item.name === action.payload.item.name
                    );

                const categoryIndex = newList.findIndex(item => 
                        item.type === action.payload.item.category
                    );
                    
                const itemIndex = newList[categoryIndex].items.findIndex(item => 
                        item.name === action.payload.item.name
                    );
                
                const reviewList = itemFilter.reviews.push(action.payload.payload)

                newList[categoryIndex].items[itemIndex].reviewList = reviewList
            return{
                ...state,
                categories: newList
            }
        default: 
            return state
    }
}

export const getCategories = () => async dispatch => {
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

export const toggleView = () => dispatch => {
    dispatch({
        type: TOGGLE_VIEW
    })
}


const setGlobalReview = (payload, categoryIndex, itemIndex) => async dispatch => {
    try {
        console.log(payload)
        await fetch(`https://top10-5e3d8-default-rtdb.firebaseio.com/categories/${categoryIndex}/items/${itemIndex}/.json`,{
            method:'PUT',
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ...payload,
                reviews: payload.reviews
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

export const writeReview = (payload, categoryIndex, itemIndex, item) => async dispatch => {
    try {
        await dispatch({
            type: WRITE_REVIEW,
            payload: {
                payload,
                item
            }
        })

        await dispatch(setGlobalReview(item,categoryIndex,itemIndex))
        
    } catch (error) {
        console.log(error)
    }
}
