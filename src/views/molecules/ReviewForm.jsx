import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { writeReview } from '../../redux/topDuck'
import {Button} from '../atoms/Button'

export const ReviewForm = () => {
    const [review, setReview] = useState();
    const dispatch = useDispatch();
    const itemSelector = useSelector(state => state.categories.categories)
    const {category, details} = useParams()
    const handleWrite = (e) => {
        e.target.style.height = '20px'
        e.target.style.height = `${e.target.scrollHeight}px`;
        setReview(e.target.value)
    }

    const handleClick = () => {
        const categoryFilter = itemSelector.find(item => 
                item.type === category
            );
        const itemFilter = categoryFilter.items.find(item => 
                item.name === details
            );
        const categoryIndex = itemSelector.findIndex(item => 
                item.type === category
            );
        const itemIndex = categoryFilter.items.findIndex(item => 
                item.name === details
            );
        dispatch(writeReview(review,categoryIndex,itemIndex,itemFilter))
    }
 
    return(
        <>
            <ReviewFormContainer>
                <ReviewFormBox 
                    id='text'
                    onChange={handleWrite}
                    placeholder='Add a review...'
                />
                <Button 
                    content={'Comment'}
                    onClick={handleClick}
                />
            </ReviewFormContainer>
        </>
    )
}

const ReviewFormContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 40px auto;
    border-top: 1px solid gray;
    & > div {
        margin: 0;
    }
`;

const ReviewFormBox = styled.textarea`
    color: white;
    width: 90%;
    margin: 20px auto;
    font-size:16px;
    resize: none;
    height: 20px;
    outline:none;
    background-color: #1a111e;
    border: none;
    border-bottom: 2px solid cyan;

    &:focus{
        border-bottom: 2px solid #962AD2;
    }
`