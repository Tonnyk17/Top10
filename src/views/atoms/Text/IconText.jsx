import React from 'react';
import styled from 'styled-components';

export const IconText = ({content,color}) => {
    return(
        <>
            <IconTextStyle color={color}>
                {content}
            </IconTextStyle>
        </>
    )
}

const IconTextStyle = styled.p`
    font-size: 16px;
    color: ${props => props.color || 'white'};
    text-align: center;
    margin: 0;
`