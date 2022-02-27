import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'
import { Subtitle } from '../atoms/Text/Subtitle';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { iconMedium } from '../../constants/sizes';

export const CategoriesCard = () => {
    return(
        <>
            <CategoriesCardStyle>
                <CategoriesCardBackground>
                    <Icon icon={faGamepad} size={iconMedium} color='cyan'/>
                    <Subtitle content={'Games'} color='cyan' isInteractive/>
                </CategoriesCardBackground>
            </CategoriesCardStyle>
        </>
    )
}

const CategoriesCardStyle = styled.div`
    width:300px;
    height: 200px;
    background-image: url('https://www.savebutonu.com/wp-content/uploads/2020/08/Cyberpunk2077-Keyart.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-image: url('https://farm2.staticflickr.com/1721/41076890350_85a097fa23_o.gif');
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