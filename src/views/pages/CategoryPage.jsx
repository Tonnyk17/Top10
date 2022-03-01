import React, { useState } from 'react'
import styled from 'styled-components'
import { ToggleButton } from '../molecules/ToggleButton'
import { useParams } from 'react-router-dom'
import { Title } from '../atoms/Text/Title'
import { CardsContainer } from '../organisms/CardsContainer'
import { Navbar } from '../organisms/Navbar'
import { TableInfo } from '../organisms/Tableinfo'
import { useSelector } from 'react-redux'

export const CategoryPage = () => {
    const isTable = useSelector(state => state.categories.isTable);
    const {category} = useParams()
    
    return(
        <>
            <Navbar/>
            <Title content={`Top 10 ${category}`}/>
            <ToggleButtonContainer>
                <ToggleButton/>
            </ToggleButtonContainer>
            {
                isTable ? 
                <CardsContainer/>
                :
                <TableInfo/>
            }
           
        </>
    )
}

const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`