import React from "react";
import styled from "styled-components";
import { desktop, iconMedium, iconSmall, tablet } from "../../constants/sizes";
import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Text/Title";
import { TitleImage } from "../atoms/TitleImage";
import { faHeart, faHeartBroken, faHeartCrack, faPoop } from "@fortawesome/free-solid-svg-icons";
import { Subtitle } from "../atoms/Text/Subtitle";

export const RecomendedCard = () => {
    return(
        <>
            <RecomendedCardStyles backImg={'https://cdn.staticneo.com/n/8/cyberpunk_2077_new_gen_demo_banner.jpg'}>
                <RecomendedInfoBackground>
                   <RecomendedInfo>
                        <Subtitle content={'Recomended'} color='whitesmoke'/>
                        <TitleImage/>
                        <InfoIcons>
                            <Icon 
                                icon={faHeart} 
                                size={iconSmall}
                                isButton
                            />
                            <Icon 
                                icon={faPoop} 
                                size={iconSmall}
                                isButton
                            />
                        </InfoIcons>
                   </RecomendedInfo>
                </RecomendedInfoBackground>
            </RecomendedCardStyles>
        </>
    )
}

const RecomendedCardStyles = styled.div`
    width: 100%;
    background-color: red;
    height: 400px;
    background-image: url(${props => props.backImg});
    background-size: cover;
    background-repeat:no-repeat;
    background-position: bottom;
    @media screen and (min-width: ${desktop}){
        height: 550px;
    }
`;

const RecomendedInfoBackground = styled.div`
    width: 100% - 40px;
    height: 100%;
    display: grid;
    align-content: flex-end;
    background-color: rgba(0,0,0,0.5);
    &:hover{
        background-color: rgba(0,0,0,0.6);
    }

    @media screen and (min-width: ${desktop}){
        align-content: center;
        justify-content: flex-start;
        padding-left: 60px;        
    }
`;

const RecomendedInfo = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${desktop}){
        width: 500px;
    }

`;

const InfoIcons = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
`

