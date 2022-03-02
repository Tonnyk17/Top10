import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { desktop, iconSmall } from "../../constants/sizes";
import { Icon } from "../atoms/Icon";
import { TitleImage } from "../atoms/TitleImage";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Subtitle } from "../atoms/Text/Subtitle";
import { IconText } from "../atoms/Text/IconText";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDislike, setLike } from "../../redux/topDuck";

export const RecomendedCard = () => {
    const categorySelector = useSelector(state => state.categories.categories)
    const [recomendedItem, setRecomendedItem] = useState();
    const dispatch = useDispatch();
    const likesSelector = useSelector(state => state.categories.myLikes);
    const dislikeSelector = useSelector(state =>  state.categories.myDislikes);
    const [isLiked,setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false);
    const [myLocalLikes, setMyLocalLikes] = useState();
    const [myLocalDislikes, setMyLocalDislikes] = useState()

    useEffect(() => {
        const randomCategoryNumber = Math.floor(Math.random() * categorySelector.length);

        if(categorySelector.length > 0){
            const randomItemNumber = Math.floor(Math.random() * (categorySelector[randomCategoryNumber].items.length))
            setRecomendedItem(categorySelector[randomCategoryNumber].items[randomItemNumber])
        }
    },[categorySelector.length])

    useEffect(() => {
        if(recomendedItem){
            const myLikesFilter = likesSelector.find(data => data.name === recomendedItem.name)
            if(myLikesFilter){
                if(myLikesFilter.isLike || recomendedItem.isLike){
                    setIsLiked(true)
                    setIsDisliked(false)
                    setMyLocalLikes(myLikesFilter)
                    setMyLocalDislikes(myLikesFilter)
                }
            }
        }
        
    },[likesSelector,recomendedItem])

    useEffect(() => {
        if(recomendedItem){
            const myDislikeFilter = dislikeSelector.find(data => data.name === recomendedItem.name)
            if(myDislikeFilter){
                if(myDislikeFilter.isDislike || recomendedItem.isDislike){
                    setIsDisliked(true)
                    setIsLiked(false)
                    setMyLocalDislikes(myDislikeFilter)
                    setMyLocalLikes(myDislikeFilter)
                }
            }
        }
        
    },[dislikeSelector,recomendedItem])

    return(
        <>
            {
                recomendedItem &&
                    <RecomendedCardStyles backImg={recomendedItem.mainImage}>
                        <RecomendedInfoBackground>
                            <RecomendedInfo>
                                    <Subtitle content={'Recomended'} color='whitesmoke'/>
                                    <TitleImage image={recomendedItem.titleImage}/>
                                    <InfoIcons>
                                        <InfoIconsContainer>
                                            <Icon 
                                                icon={faThumbsUp} 
                                                size={iconSmall}
                                                isButton
                                                onClick={() => dispatch(setLike(recomendedItem))}
                                                color={isLiked && 'cyan'}
                                            />
                                            <IconText content={myLocalLikes ? myLocalLikes.likes : recomendedItem.likes} color='#838383'/>
                                        </InfoIconsContainer>
                                        <InfoIconsContainer>
                                            <Icon 
                                                icon={faThumbsDown} 
                                                size={iconSmall}
                                                isButton
                                                onClick={() => dispatch(setDislike(recomendedItem))}
                                                color={isDisliked && 'cyan'}
                                            />
                                            <IconText content={myLocalDislikes ? myLocalDislikes.dislikes : recomendedItem.dislikes} color='#838383'/>
                                        </InfoIconsContainer>
                                    </InfoIcons>
                            </RecomendedInfo>
                        </RecomendedInfoBackground>
                    </RecomendedCardStyles>
            }
        </>
    )
}

const RecomendedCardStyles = styled.div`
    width: 100%;
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
        justify-content: flex-end;
        padding-right: 60px;        
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
    width: 80%;
    margin: 5px 0;
    display: grid;
    grid-template-columns: repeat(2,100px);
    justify-content: center;
    justify-items: center;
    align-content: center;
`
const InfoIconsContainer = styled.div`
    margin: 5px;
    
`

