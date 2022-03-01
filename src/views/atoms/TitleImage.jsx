import React from "react";
import styled from "styled-components";

export const TitleImage = ({image}) => {
    return(
        <>
            <TitleImageStyle src={image}/>
        </>
    )
}

const TitleImageStyle = styled.img`
    width: 100%;
`