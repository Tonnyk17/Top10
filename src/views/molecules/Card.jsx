import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon';
import { Subtitle } from '../atoms/Text/Subtitle';
import { faEye, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { iconMedium, tablet } from '../../constants/sizes';
import { IconText } from '../atoms/Text/IconText';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLike, setDislike } from '../../redux/topDuck';

export const Card = ({item, category}) => {
    const dispatch = useDispatch()
    const localSelector = useSelector(state => state.categories);
    const [isLiked,setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false);
    const [myLocalLikes, setMyLocalLikes] = useState();
    const [myLocalDislikes, setMyLocalDislikes] = useState()

    useEffect(() => {
        if(localSelector.myLikes){
            const myLikesFilter = localSelector.myLikes?.find(data => data.name === item.name)
    
            if(myLikesFilter){
                if(myLikesFilter.isLike || item.isLike){
                    setIsLiked(true)
                    setIsDisliked(false)
                    setMyLocalLikes(myLikesFilter)
                    setMyLocalDislikes(myLikesFilter)
                }
            }
        }
        
    },[item.isLike, item.name, localSelector])

    useEffect(() => {
        if(localSelector.myDislikes){
            const myDislikeFilter = localSelector.myDislikes.find(data => data.name === item.name)
       
            if(myDislikeFilter){
                if(myDislikeFilter.isDislike || item.isDislike){
                    setIsDisliked(true)
                    setIsLiked(false)
                    setMyLocalDislikes(myDislikeFilter)
                    setMyLocalLikes(myDislikeFilter)
                }
            }
        
        }
    },[localSelector, item.isDislike, item.name])

    const history = useNavigate();
    return(
        <>
            <CardStyles>
                <CardInfoContainer poster={item.posterImage}>
                    <CardInfo>
                    <ButtonContainer>
                        <Icon 
                            icon={faThumbsUp} 
                            isButton 
                            onClick={() => dispatch(setLike(item))}
                            color={isLiked && 'cyan'}
                        />
                        <IconText content={myLocalLikes ? myLocalLikes.likes : item.likes}/>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Icon 
                            icon={faThumbsDown} 
                            isButton
                            onClick={() => dispatch(setDislike(item))}
                            color={isDisliked && 'cyan'}
                        />
                        <IconText content={myLocalDislikes ? myLocalDislikes.dislikes :  item.dislikes}/>
                    </ButtonContainer>
                    <SeeButtonContainer onClick={() => history(`/${category}/${item.name}`)}>
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
    box-shadow: 0px 1px 5px 2px black;
    & > * {
        position:relative;
        z-index: 1;
    }

    &::before{
        content: '';
        position: absolute;
        width: 500px;
        height: 150%;
        background: linear-gradient(#36ECF7, #000);
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
            background: linear-gradient(#962AD2, #000);
        }
    }
`;

const CardInfoContainer = styled.div`
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-image: url(${props => props.poster});
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
    align-items: center;
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