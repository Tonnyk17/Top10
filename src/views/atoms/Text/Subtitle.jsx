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
    font-size: 38px;
    margin: 20px 0;
    color: ${props => props.color || 'white'};
    cursor: ${props => props.isInteractive ? 'pointer' : 'default'};
`