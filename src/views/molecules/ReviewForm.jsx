import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Button} from '../atoms/Button'

export const ReviewForm = () => {
    const handleWrite = (e) => {
        e.target.style.height = '20px'
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
 
    return(
        <>
            <ReviewFormContainer>
                <ReviewFormBox 
                    id='text'
                    onChange={handleWrite}
                    placeholder='Add a review...'
                />
                <Button content={'Comment'}/>
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