import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CATEGORY_PATH, DETAILS_PATH, HOME_PATH } from "../constants/paths";
import { CategoryPage } from "../views/pages/CategoryPage";
import { Details } from "../views/pages/Details";
import { Home } from "../views/pages/Home";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getCategories, getMyDislikes, getMyLikes } from '../redux/topDuck';
import { useSelector } from "react-redux";

export const Router = () => {
  const likesSelector = useSelector(state => state.categories.myLikes);
  const dislikesSelector = useSelector(state => state.categories.myDislikes)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCategories())
      dispatch(getMyLikes())
      dispatch(getMyDislikes())
  },[])

  useEffect(() => {
      localStorage.setItem('myLikes', JSON.stringify(likesSelector))
      localStorage.setItem('myDislikes', JSON.stringify(dislikesSelector))
  },[dislikesSelector, likesSelector])

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


