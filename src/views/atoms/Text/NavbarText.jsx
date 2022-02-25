import React from "react";
import styled from "styled-components";

export const NavbarText = ({content,color}) => {
    return(
        <>
            <NavbarTextStyle color={color}>
                {content}
            </NavbarTextStyle>
        </>
    )
}

const NavbarTextStyle = styled.h4`
    color: ${props => props.color || 'white'};
    font-weight: 500;
    font-size: 24px;
`