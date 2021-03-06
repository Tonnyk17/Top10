import React from 'react'
import { ReviewForm } from '../molecules/ReviewForm'
import { DetailsInfo } from '../organisms/DetailsInfo'
import { Navbar } from '../organisms/Navbar'
import { Reviews } from '../organisms/Reviews'

export const Details = () => {
    return(
        <>
            <Navbar/>
            <DetailsInfo/>
            <ReviewForm/>
            <Reviews/>
        </>
    )
}
