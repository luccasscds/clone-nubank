import {Routes, Route} from "react-router-dom";
import { Home } from "./Home";

export function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={ <Home /> } ></Route>

            <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
    );
}