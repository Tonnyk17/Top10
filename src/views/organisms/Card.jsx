import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon';
import { Subtitle } from '../atoms/Text/Subtitle';
import { faHeart, faPoop,faEye } from '@fortawesome/free-solid-svg-icons';
import { iconMedium, tablet } from '../../constants/sizes';
import { IconText } from '../atoms/Text/IconText';
import { Button } from '../atoms/Button';

export const Card = () => {
    return(
        <>
            <CardStyles>
                <CardInfoContainer>
                    <CardInfo>
                    <ButtonContainer>
                        <Icon 
                            icon={faHeart} 
                            isButton 
                        />
                        <IconText content={'130'}/>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Icon 
                            icon={faPoop} 
                            isButton
                        />
                        <IconText content={'130'}/>
                    </ButtonContainer>
                    <SeeButtonContainer>
                        <Icon 
                            icon={faEye} 
                            size={iconMedium} 
                        />
                        <Subtitle content={'See more'} />
                    </SeeButtonContainer>
                    </CardInfo>
                </CardInfoContainer>
            </CardStyles>
        </>
    )
}

const CardStyles = styled.div`
    width: 250px;
    height: 350px;
    border-radius: 10px;
    position: relative;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    & > * {
        position:relative;
        z-index: 1;
    }

    &::before{
        content: '';
        position: absolute;
        width: 500px;
        height: 150%;
        background: linear-gradient(#962AD2, #000);
        animation: spin 4s linear infinite;
    }

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(350deg);
        }
    }

    &:hover{
        &::before{
            background: linear-gradient(#36ECF7, #000);
        }
    }
`;

const CardInfoContainer = styled.div`
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-image: url('https://i1.wp.com/cinemedios.com/wp-content/uploads/2021/07/Arcane_Poster.png?resize=1024%2C1435&ssl=1');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: flex;
`;

const CardInfo = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    background-color: rgba(0,0,0,0.5);
    &:hover{
        background-color: rgba(0,0,0,0.6);
        opacity: 1;
        & > div {
            opacity: 1;
        }
    }
    @media screen and (min-width: ${tablet}){
        opacity: 0.3;
        transition: 0.5s;
    }
    
`
const ButtonContainer = styled.div`
    width: 95%;
    height: 30px;
    margin: 0 auto;
    display: flex;
`
const SeeButtonContainer = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display:grid;
    justify-items: center;
    align-content: center;
    padding-bottom: 40px;
    opacity: 0.2;
    cursor: pointer;
    & > *{
        cursor: pointer;
    }
    @media screen and (min-width: ${tablet}){
        opacity: 0;
    }
`