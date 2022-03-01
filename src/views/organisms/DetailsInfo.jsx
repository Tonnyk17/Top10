import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { iconSmall, tablet } from '../../constants/sizes'
import { DetailsImage } from '../atoms/DetailsImage'
import { Icon } from '../atoms/Icon'
import { TitleImage } from '../atoms/TitleImage'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { IconText } from '../atoms/Text/IconText'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const DetailsInfo = () => {
    const {category,details} = useParams();
    const itemSelector = useSelector(state => state.categories.categories)
    const [itemData,setItemData] = useState()

    useEffect(() => {
        const categoryFilter = itemSelector.find(item => item.type === category);
        if(categoryFilter){
            const itemsFilter = categoryFilter.items.find(item => item.name === details)
            setItemData(itemsFilter)
            console.log(itemsFilter)
        }
        
    },[category, details, itemData, itemSelector])
    
    return(
        <>
            {
                itemData &&
                <div>
                    <DetailsInfoStyle>
                        <DetailsImage backImg={itemData.mainImage}/>
                        <DetailTitleContainer>
                                <TitleImage image={itemData.titleImage}/>
                        </DetailTitleContainer>
                    </DetailsInfoStyle>
                    <DetailsDataContainer>
                        <DetailsData>
                            <IconText content={`Year ${itemData.year}`} color={'#AAAAAA'}/>
                            <DetailsButtonsContainer>
                                <DetailsButtons>
                                        <Icon 
                                            icon={faThumbsUp} 
                                            size={iconSmall} 
                                            isButton
                                        />
                                        <IconText content={itemData.likes}/>
                                    </DetailsButtons>
                                    <DetailsButtons>
                                        <Icon 
                                            icon={faThumbsDown} 
                                            size={iconSmall} 
                                            isButton
                                        />
                                        <IconText content={itemData.dislikes}/>
                                    </DetailsButtons>
                            </DetailsButtonsContainer>
                        </DetailsData>
                        <DetailsDescription>
                            <IconText content={itemData.description}/>
                        </DetailsDescription>
                    </DetailsDataContainer>
                </div>
            }
        </>
    )
}

const DetailsInfoStyle = styled.div`
    width: 100%;
    position: relative;
`
const DetailTitleContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 600px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
`

const DetailsDataContainer = styled.div`
    width: 80%;
    margin: 5px auto;
    @media screen and (min-width: ${tablet}){
        & > h2 {
            text-align: left;
        }
    }
`

const DetailsData = styled.div`
    width: 100%;
    margin: 5px auto;
    border-bottom: 1px solid #AAAA;
   
    @media screen and (min-width: ${tablet}){
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > h2 {
            text-align: left;
        }
    }
    
`
const DetailsButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (min-width: ${tablet}){
        width: 50%;
        justify-content: flex-end;
    }
`

const DetailsButtons = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetailsDescription = styled.div`
    width: 100%;
    word-wrap: break-word;
    color: whitesmoke;
    font-size: 14px;
    & > *{
        text-align: left;
    }
    @media screen and (min-width: ${tablet}){
        width: 50%;
    }
`
