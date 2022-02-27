import React from 'react'
import styled from 'styled-components'

export const Button = ({content, textColor, color}) => {
    return(
        <>
           <ButtonContainer>
                <ButtonStyle 
                    textColor={textColor} 
                    color={color}
                >
                    {content}
                </ButtonStyle>
           </ButtonContainer>
        </>
    )
}

const ButtonStyle = styled.div`
    min-width: 60px;
    width: 20%;
    font-size: 14px;
    margin: 10px auto;
    box-shadow: 0px 0px 3px 2px cyan;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px;
    background: #261A2BB3;
    background: -webkit-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: -moz-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: linear-gradient(to top, #261A2BB3, #4A3257);
    color: ${props => props.textColor || 'white'};
    &:hover{
        background: #201625;
        box-shadow: 0px 0px 3px 2px #962AD2;
    }
`
const ButtonContainer = styled.div`
    width: 100%;
`