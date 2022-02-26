import React from "react";
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