import React from "react";
import styled from "styled-components";

export const Title = ({content,color, isInteractive}) => {
    return(
        <>
            <TitleStyles color={color} isInteractive={isInteractive}>
                {content}
            </TitleStyles>
        </>
    )
}

const TitleStyles = styled.h1`
    width: 100%;
    margin: 20px 0;
    color: ${props => props.color || 'white'};
    font-size: 40px;
    text-align: center;
    cursor: ${props => props.isInteractive ? 'pointer' : 'default'};
`