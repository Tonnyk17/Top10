import React from 'react'
import styled from 'styled-components'
import { desktop } from '../../constants/sizes'
import { Title } from '../atoms/Text/Title'
import { CategoriesCard } from '../molecules/CategoriesCard'

export const Categories = () => {
    return(
        <>
            <CategoriesTitleContainer>
                <Title content={'Categories'}/>
            </CategoriesTitleContainer>
            <CategoriesStyle>
                <CategoriesCard/>
                <CategoriesCard/>
            </CategoriesStyle>
        </>
    )
}

const CategoriesStyle = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,300px);
    grid-gap: 20px;
    justify-content: center;
`;

const CategoriesTitleContainer = styled.div`
    width:80%;
    margin: auto;
    margin-top: 50px;
`