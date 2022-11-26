import React from "react";
import { Outlet } from "react-router-dom";
 
function About() {
 return (
   <>
     <div style={{ marginBottom: "20px" }}>
       <Outlet />
     </div>
   </>
 );
}
 
export default About;