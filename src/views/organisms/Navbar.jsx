import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarItem } from "../molecules/NavbarItem";
import { faBars, faClose, faGamepad, faHome, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { iconMedium, iconSmall } from "../../constants/sizes";

export const Navbar = () => {

    const [isClose, setIsClose] = useState(true)
    const handleClose = () => {
        setIsClose(!isClose)
    }
    return(
        <>
                <IconButtonContainer isClose={isClose}>
                    <Icon 
                        icon={faBars}
                        isClose={isClose}
                        size={iconSmall}
                        color='cyan'
                        isButton
                        onClick={handleClose}
                    />
                </IconButtonContainer>
                <NavbarStyles isClose={isClose}>
                    <Icon 
                        icon={faClose} 
                        size={iconMedium} 
                        color='cyan' 
                        isButton
                        onClick={handleClose}
                    />
                    <NavbarItem
                        icon={faHome}
                        content={'Home'}
                    />
                    <NavbarItem
                        icon={faGamepad}
                        content={'Games'}
                    />
                    <NavbarItem
                        icon={faVideoCamera}
                        content={'Movies'}
                    />
                </NavbarStyles>
        </>
    )
}


const NavbarStyles = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #251A2B;
    background: -webkit-radial-gradient(top, #251A2B, #3A2047);
    background: -moz-radial-gradient(top, #251A2B, #3A2047);
    background: radial-gradient(to bottom, #251A2B, #3A2047);
    top: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit,50px);
    grid-gap: 50px;
    z-index: 1;
    left: ${props => props.isClose ? '-500px' : '0'};
    transition: 0.5s;
    @media screen and (min-width: 700px){
        width: 350px;
    }
`
const IconButtonContainer = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    opacity: ${props => props.isClose ? 1 : 0};
    transition: 0.5s;
`