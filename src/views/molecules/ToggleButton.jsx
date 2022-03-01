import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'
import { faGrip, faTable } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleView } from '../../redux/topDuck'
import { useSelector } from 'react-redux'

export const ToggleButton = () => {
    const dispatch = useDispatch()
    const isTable = useSelector(state => state.categories.isTable)

    return(
        <>
            <ToggleButtonStyle>
                    <Icon 
                    icon={faTable} 
                    isButton
                    onClick={() => dispatch(toggleView())}
                    color={isTable && 'cyan'}
                    />
                    <Icon 
                    icon={faGrip} 
                    isButton
                    onClick={() => dispatch(toggleView())}
                    color={!isTable && 'cyan'}
                    />
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
