import React from 'react'
import styled from 'styled-components'
import { desktop } from '../../constants/sizes'

export const DetailsImage = ({backImg}) => {
    return(
        <>
            <DetailsImageStyle backImg={backImg}/>
        </>
    )
}

const DetailsImageStyle = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    background-image: url(${props => props.backImg});
    background-size: cover;
    background-repeat:no-repeat;
    background-position: top;
    @media screen and (min-width: ${desktop}){
      height: 700px;
      background-position: center;
    }

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(#201625,transparent, #201625);
    }
`;