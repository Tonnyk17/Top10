import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ({icon,size, isButton,color, onClick}) => {
    return(
        <>
            <IconStyles isButton={isButton}>
                <FontAwesomeIcon 
                    icon={icon} 
                    size={size} 
                    color={color || 'white'} 
                    onClick={onClick}
                />
            </IconStyles>
        </>
    )
}

const IconStyles = styled.div`
    cursor: ${props => props.isButton ? 'pointer' : 'default'};
    margin: 10px;
    text-align: right;
`