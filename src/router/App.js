import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_PATH } from "../constants/paths";
import { Home } from "../views/pages/Home";

export const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path={HOME_PATH} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}


