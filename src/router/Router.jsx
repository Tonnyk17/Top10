import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CATEGORY_PATH, DETAILS_PATH, HOME_PATH } from "../constants/paths";
import { CategoryPage } from "../views/pages/CategoryPage";
import { Details } from "../views/pages/Details";
import { Home } from "../views/pages/Home";
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

export const Router = () => {
  const selector = useSelector(store => store)
  console.log(selector)
  useEffect(() => {
    console.log('This is a simple log')
  },[])
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={HOME_PATH} element={<Home/>}/>
                <Route path={CATEGORY_PATH} element={<CategoryPage/>}/>
                <Route path={DETAILS_PATH} element={<Details/>}/>   
            </Routes>
        </BrowserRouter>
    </>
  );
}


