import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { Card } from '../molecules/Card'

export const CardsContainer = () => {
    const categorySelector = useSelector(state => state.categories.categories)
    const [categoryList,setCategoryList] = useState();
    const {category} = useParams();

    useEffect(() => {
        const categoryFilter = categorySelector.find(item => item.type === category);
        setCategoryList(categoryFilter)
        
    },[category, categorySelector])
    
    return(
        <>
           <MainCardsContainer>
                <CardsContainerStyle>
                    {
                        categoryList && 
                        categoryList.items.map(item => (
                            <Card 
                                item={item}
                                category={category}
                            />
                        ))
                    }
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
