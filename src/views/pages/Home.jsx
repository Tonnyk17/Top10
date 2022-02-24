import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarText } from "../atoms/Text/NavbarText";
import { Subtitle } from "../atoms/Text/Subtitle";
import { Title } from "../atoms/Text/Title";
import { NavbarItem } from "../molecules/NavbarItem";

export const Home = () => {
    return(
        <>
           <Title content={'Hella'}/> 
           <Subtitle content={'Hella'}/>
           <Icon/>
           <NavbarText content={'Hella'}/>
           <NavbarItem/>
        </>
    )
}