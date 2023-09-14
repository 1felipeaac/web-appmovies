import { Route, Routes } from "react-router-dom";

import { NewMovie } from "../pages/NewMovie";
import { MoviePreview } from "../pages/MoviePreview";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { MovieEdit } from "../pages/MovieEdit";


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newmovie" element={<NewMovie/>}/>
            <Route path="/movieedit/:id" element={<MovieEdit/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/moviepreview/:id" element={<MoviePreview/>}/>
        </Routes>
    )
}