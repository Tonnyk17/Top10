import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarText } from "../atoms/Text/NavbarText";
import { iconSmall } from "../../constants/sizes";

export const NavbarItem = ({icon,content}) => {
    return(
        <>
            <NavbarItemsStyle>
                <Icon 
                    icon={icon} 
                    size={iconSmall} 
                    isButton 
                    color='cyan'
                />
                <NavbarText content={content} color={'cyan'}/>
            </NavbarItemsStyle>
        </>
    )
}

const NavbarItemsStyle = styled.div`
    display: flex;
    width: 300px;
    height:30px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        & > *{
                text-shadow: 0px 0px 10px pink; 
        }
    }
    
`;