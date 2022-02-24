import React from "react";
import styled from "styled-components";

export const Title = ({content}) => {
    return(
        <>
            <TitleStyles>
                {content}
            </TitleStyles>
        </>
    )
}

const TitleStyles = styled.h1`
    
`