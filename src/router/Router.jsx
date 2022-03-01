import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CATEGORY_PATH, DETAILS_PATH, HOME_PATH } from "../constants/paths";
import { CategoryPage } from "../views/pages/CategoryPage";
import { Details } from "../views/pages/Details";
import { Home } from "../views/pages/Home";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getCategories} from '../redux/topDuck';
import { useSelector } from "react-redux";

export const Router = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCategories())
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


