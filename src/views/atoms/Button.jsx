import React from 'react'
import styled from 'styled-components'

export const Button = ({content}) => {
    return(
        <>
            <ButtonStyle>
                {content}
            </ButtonStyle>
        </>
    )
}

const ButtonStyle = styled.button`

`