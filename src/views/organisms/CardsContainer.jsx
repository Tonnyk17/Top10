import React from 'react'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { Card } from '../molecules/Card'

export const CardsContainer = () => {
    return(
        <>
            <CardsContainerStyle>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </CardsContainerStyle>
        </>
    )
}

const CardsContainerStyle = styled.div`

    width: 100%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,250px);
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    @media screen and (min-width: ${tablet}){
        width: 90%;
    }
`