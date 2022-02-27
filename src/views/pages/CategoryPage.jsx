import React from 'react'
import { useParams } from 'react-router-dom'
import { Title } from '../atoms/Text/Title'
import { CardsContainer } from '../organisms/CardsContainer'
import { Navbar } from '../organisms/Navbar'
import { TableInfo } from '../organisms/Tableinfo'

export const CategoryPage = () => {
    const {category} = useParams()
    return(
        <>
            <Navbar/>
            <Title content={`Top 10 ${category}`}/>
            <CardsContainer/>
            <TableInfo/>
        </>
    )
}