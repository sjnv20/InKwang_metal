import {Route, Routes} from "react-router-dom";
import Company from "./routes/company";
import React from "react";
import Home from "./routes/home";
import Product from "./routes/product"
import Gallery from "./routes/gallery";
import KMap from "./routes/kakao";
import CMap from "./routes/cmap";



function App () {
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/kakaomap" element={<KMap/>}/>
        <Route path="/cmap" element={<CMap/>}/>
      </Routes>
    );
}


export default App;
