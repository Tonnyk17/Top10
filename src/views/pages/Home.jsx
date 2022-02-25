import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { NavbarText } from "../atoms/Text/NavbarText";
import { Subtitle } from "../atoms/Text/Subtitle";
import { Title } from "../atoms/Text/Title";
import { CategoriesCard } from "../molecules/CategoriesCard";
import { NavbarItem } from "../molecules/NavbarItem";
import { Categories } from "../organisms/Categories";
import { Navbar } from "../organisms/Navbar";
import { RecomendedCard } from "../organisms/RecomendedCard";

export const Home = () => {
    return(
        <>
           <Navbar/>
           <RecomendedCard/>
           <Categories/>
        </>
    )
}