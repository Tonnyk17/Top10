import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CATEGORY_PATH, HOME_PATH } from "../constants/paths";
import { CategoryPage } from "../views/pages/CategoryPage";
import { Home } from "../views/pages/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={HOME_PATH} element={<Home/>}/>
              <Route path={CATEGORY_PATH} element={<CategoryPage/>}/>   
          </Routes>
      </BrowserRouter>
    </>
  );
}


