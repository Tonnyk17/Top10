import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'
import { faGrip, faTable } from '@fortawesome/free-solid-svg-icons'

export const ToggleButton = () => {
    return(
        <>
            <ToggleButtonStyle>
                <Icon icon={faTable} isButton/>
                <Icon icon={faGrip} isButton/>
            </ToggleButtonStyle>
        </>
    )
}

const ToggleButtonStyle = styled.div`
    width: 80px;
    border-radius: 20px;
    height: 30px;
    background-color: #100b12;
    display: flex;
    justify-content: center;
    align-items: center;
`