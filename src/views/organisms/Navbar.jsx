import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarItem } from "../molecules/NavbarItem";
import { faBars, faClose, faGamepad, faHome, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { iconMedium, iconSmall, tablet } from "../../constants/sizes";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const history = useNavigate()
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
                        onClick={() => history('/')}
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
    background: #261A2BB3;
    background: -webkit-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: -moz-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: linear-gradient(to top, #261A2BB3, #4A3257);
    border-right: 2px solid #2F2137;
    top: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit,50px);
    grid-gap: 50px;
    z-index: 10;
    left: ${props => props.isClose ? '-790px' : '0'};
    transition: 0.5s;
    @media screen and (min-width: ${tablet}){
        width: 350px;
    }
`
const IconButtonContainer = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    z-index: 10;
    opacity: ${props => props.isClose ? 1 : 0};
    transition: 0.5s;
`