import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'
import { Subtitle } from '../atoms/Text/Subtitle';
import { iconMedium } from '../../constants/sizes';

export const CategoriesCard = ({
    icon,
    name,
    image,
    gif,
    onClick
}) => {
    return(
        <>
            <CategoriesCardStyle 
                image={image} 
                gif={gif}
                onClick={onClick}
            >
                <CategoriesCardBackground>
                    <Icon 
                        icon={icon} 
                        size={iconMedium} 
                        color='cyan'
                    />
                    <Subtitle 
                        content={name} 
                        color='cyan' 
                        isInteractive
                    />
                </CategoriesCardBackground>
            </CategoriesCardStyle>
        </>
    )
}

const CategoriesCardStyle = styled.div`
    width:300px;
    height: 200px;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-image: url(${props => props.gif});
    }
`
const CategoriesCardBackground = styled.div`
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); 
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    &:hover{
        background-color: rgba(0,0,0,0.6); 
    }
`