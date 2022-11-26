import React, { useState } from "react";
import Header from "./components/DetailsForm/Header";
import ResumeBuilder from "./components/DetailsForm/ResumeBuilder";
import Home from "./components/Home";
import UseTemplate from "./components/DetailsForm/UseTemplate";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import "./App.css";



 
 
function App() {
 
  return (
 
    <div className="App">
      <Header />
     
      <Routes>
       <Route path="/" element={<Test/>}>
       <Route index element={<Home/>} />
     
         <Route path="usetemplate" element={<UseTemplate/>} />
         <Route path="contact" element={<AboutUs/>} />
       \
       
       </Route>
     </Routes>
     
     
    </div>
  );
}
 
export default App;