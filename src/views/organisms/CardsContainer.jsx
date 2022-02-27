import React from 'react'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { Card } from '../molecules/Card'
import { ToggleButton } from '../molecules/ToggleButton'

export const CardsContainer = () => {
    return(
        <>
           <MainCardsContainer>
            <ToggleButtonContainer>
                <ToggleButton/>
            </ToggleButtonContainer>
            <CardsContainerStyle>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardsContainerStyle>
           </MainCardsContainer>
        </>
    )
}

const CardsContainerStyle = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,250px);
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
`

const MainCardsContainer = styled.div`
    width: 100%;
    margin: 40px auto;
    display: grid;
    grid-template-rows: 80px 1fr; 
    @media screen and (min-width: ${tablet}){
        width: 90%;
    }
`
const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`