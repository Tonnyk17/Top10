
const initialState = {
    categories:[],
    isTable: false,
    myLikes: [],
    myDislikes: [],
}

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_MY_LIKES = 'GET_MY_LIKES';
const GET_MY_DISLIKES = 'GET_MY_DISLIKES';
const TOGGLE_VIEW = 'TOGGLE_VIEW';
const WRITE_REVIEW = 'WRITE_REVIEW';
const SET_LIKE = 'SET_LIKE';
const SET_DISLIKE = 'SET_DISLIKE';

export const topReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES: 
            return {
                ...state,
                categories: action.payload
            }
        case GET_MY_LIKES:
            return{
                ...state,
                myLikes: action.payload
            }
        case GET_MY_DISLIKES:
            return{
                ...state,
                myDislikes: action.payload
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
            return {
                ...state,
                categories: newList
            }
        case SET_LIKE: 
                const likeList = [...state.categories]
                const categoryLikeIndex = state.categories.findIndex(item => 
                        item.type === action.payload.category
                    )
                const itemLikeIndex = likeList[categoryLikeIndex].items.findIndex(item =>
                        item.name === action.payload.name
                    )
                likeList[categoryLikeIndex].items[itemLikeIndex].isLike = !likeList[categoryLikeIndex].items[itemLikeIndex].isLike;
                if(likeList[categoryLikeIndex].items[itemLikeIndex].isLike){
                    likeList[categoryLikeIndex].items[itemLikeIndex].likes += 1;
                    if(likeList[categoryLikeIndex].items[itemLikeIndex].isDislike){
                        likeList[categoryLikeIndex].items[itemLikeIndex].dislikes -= 1;
                        likeList[categoryLikeIndex].items[itemLikeIndex].isDislike = !likeList[categoryLikeIndex].items[itemLikeIndex].isDislike;
                    }
                   
                    return {
                        ...state,
                        categories: likeList,
                        myLikes: [...state.myLikes,action.payload],
                        myDislikes: state.myDislikes.filter(item => item.name !== action.payload.name)
                    }
                }
                else{
                    likeList[categoryLikeIndex].items[itemLikeIndex].likes -= 1;
                    return {
                        ...state,
                        categories: likeList,
                        myLikes: state.myLikes.filter(item => item.name !== action.payload.name)
                    }
                }
        case SET_DISLIKE: 
                const dislikeList = [...state.categories]
                const categoryDislikeIndex = state.categories.findIndex(item => 
                        item.type === action.payload.category
                    )
                const itemDislikeIndex = dislikeList[categoryDislikeIndex].items.findIndex(item =>
                        item.name === action.payload.name
                    )
                dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isDislike = !dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isDislike;
                if(dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isDislike){
                    dislikeList[categoryDislikeIndex].items[itemDislikeIndex].dislikes += 1;

                    if(dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isLike){
                        dislikeList[categoryDislikeIndex].items[itemDislikeIndex].likes -= 1;
                        dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isLike = !dislikeList[categoryDislikeIndex].items[itemDislikeIndex].isLike;
                    }
                    return {
                        ...state,
                        categories: dislikeList,
                        myDislikes: [...state.myDislikes,action.payload],
                        myLikes: state.myLikes.filter(item => item.name !== action.payload.name)
                    }
                }
                else{
                    dislikeList[categoryDislikeIndex].items[itemDislikeIndex].dislikes -= 1;
                    return {
                        ...state,
                        categories: dislikeList,
                        myDislikes: state.myDislikes.filter(item => item.name !== action.payload.name)
                    }
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

export const getMyLikes = () => async dispatch => {
    try {
        const myLocalLikes = JSON.parse(localStorage.getItem('myLikes'))
        dispatch({
            type: GET_MY_LIKES,
            payload: myLocalLikes
        })
    } catch (error) {
        console.log(error)
    }
}

export const getMyDislikes = () => async dispatch => {
    try {
        const myLocalDislikes = JSON.parse(localStorage.getItem('myDislikes'))
        dispatch({
            type: GET_MY_DISLIKES,
            payload: myLocalDislikes
        })
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
        .then(response => console.log('Review added'))
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

export const setLike = payload => async dispatch => {
        dispatch({
            type: SET_LIKE,
            payload
        })
}

export const setDislike = payload => dispatch => {
    dispatch({
        type: SET_DISLIKE,
        payload
    })

}
