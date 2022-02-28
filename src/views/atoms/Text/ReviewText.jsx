import React from 'react'
import styled from 'styled-components'

export const ReviewText = ({content,color}) => {
    return(
        <>
            <ReviewTextStyled color={color}>
                {content}
            </ReviewTextStyled>
        </>
    )
}

const ReviewTextStyled = styled.p`
    font-size: 17px;
    color: ${props => props.color || 'white'};
    width: 100%;
    word-wrap: break-word;
    margin: 40px 0;
`