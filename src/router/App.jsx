import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CATEGORY_PATH, DETAILS_PATH, HOME_PATH } from "../constants/paths";
import { CategoryPage } from "../views/pages/CategoryPage";
import { Details } from "../views/pages/Details";
import { Home } from "../views/pages/Home";
import { Provider } from "react-redux";
import { generateStore } from "../redux/store";

export const App = () => {
  const store = generateStore()
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={HOME_PATH} element={<Home/>}/>
                <Route path={CATEGORY_PATH} element={<CategoryPage/>}/>
                <Route path={DETAILS_PATH} element={<Details/>}/>   
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}


