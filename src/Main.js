import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './Infos/Details';
import Details1 from './Infos/Details1/Details1';
import Details2 from './Infos/Details2/Details2';
const Main = () => {
    const [Données,setD]=useState();
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Details Données={Données} setD={setD}/>}></Route>
    <Route exact path="/Details1/*" element={<Details1 Données={Données} setD={setD}/>}></Route>
    <Route exact path="/Details2/*" element={<Details2 Données={Données} setD={setD}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Main