import React from "react";
import styled from "styled-components";

export const Subtitle = ({content,color, isInteractive}) => {
    return(
        <>
            <SubtitleStyles color={color} isInteractive={isInteractive}>
                {content}
            </SubtitleStyles>
        </>
    )
}

const SubtitleStyles = styled.h2`
    width: 100%;
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
    color: ${props => props.color || 'white'};
    cursor: ${props => props.isInteractive ? 'pointer' : 'default'};
`