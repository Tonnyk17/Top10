import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarText } from "../atoms/Text/NavbarText";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { iconSmall } from "../../constants/sizes";

export const NavbarItem = () => {
    return(
        <>
            <NavbarItemsStyle>
                <Icon icon={faHamburger} size={iconSmall}/>
                <NavbarText content={'Hella'}/>
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
`;