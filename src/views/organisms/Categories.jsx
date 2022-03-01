import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Title } from '../atoms/Text/Title'
import { CategoriesCard } from '../molecules/CategoriesCard'
import { getIcons } from '../../constants/functions'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
    const categories = useSelector(state => state.categories.categories);
    const history = useNavigate();
    return(
        <>
            <CategoriesTitleContainer>
                <Title content={'Categories'}/>
            </CategoriesTitleContainer>
            <CategoriesStyle>
                {
                    categories &&
                    categories.map(category => (
                        <CategoriesCard
                            icon={getIcons(category.icon)}
                            name={category.type}
                            image={category.image}
                            gif={category.gif}
                            onClick={() => history(`/${category.type}`)}
                        />
                    ))
                }
            </CategoriesStyle>
        </>
    )
}

const CategoriesStyle = styled.div`
    width: 80%;
    margin: 20px auto;
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