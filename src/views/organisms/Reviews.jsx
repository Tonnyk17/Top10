import React from 'react'
import styled from 'styled-components'
import { ReviewText } from '../atoms/Text/ReviewText'
import { Subtitle } from '../atoms/Text/Subtitle'

export const Reviews = () => {
    return(
        <>
            <Subtitle content={'70 Reviews'}/>
            <ReviewsStyle>
                <ReviewText content={'This is the best hella game ppp ppppppppppppppppppppppppppppppppppppp'}/>
                <ReviewText content={'This is the best hella game'} color={'cyan'}/>
                <ReviewText content={'This is the best hella game'} color={'cyan'}/>
                <ReviewText content={'This is the best hella game'} color={'cyan'}/>
            </ReviewsStyle>
        </>
    )
}

const ReviewsStyle = styled.div`
    width: 80%;
    margin: 30px auto;
`