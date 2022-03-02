import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReviewText } from '../atoms/Text/ReviewText'
import { Subtitle } from '../atoms/Text/Subtitle'

export const Reviews = () => {
    const {category, details} = useParams();
    const itemSelector = useSelector(state => state.categories.categories)
    const [itemData, setItemData] = useState();

    useEffect(() => {
        const categoryFilter = itemSelector.find(item => item.type === category);
        if(categoryFilter){
            const itemsFilter = categoryFilter.items.find(item => item.name === details)
            setItemData(itemsFilter)
        }
    },[category, details, itemData, itemSelector])
    return(
        <>
            {
                itemData && 
                <div>
                    <Subtitle content={`${itemData.reviews.length - 1} Reviews`}/>
                    <ReviewsStyle>
                        {
                            itemData.reviews.map((item) => (
                                <ReviewText content={item}/>
                            ))
                         
                        }
                    </ReviewsStyle>
                </div>
            }
        </>
    )
}

const ReviewsStyle = styled.div`
    width: 80%;
    margin: 30px auto;
`