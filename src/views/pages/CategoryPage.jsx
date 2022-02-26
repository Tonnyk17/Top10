import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms/Text/Title'
import { ToggleButton } from '../molecules/ToggleButton'
import { CardsContainer } from '../organisms/CardsContainer'
import { Navbar } from '../organisms/Navbar'

export const CategoryPage = () => {
    return(
        <>
            <Navbar/>
            <Title content={'Top 10 Games'}/>
            <ToggleButton/>
            <CardsContainer/>
        </>
    )
}