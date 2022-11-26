import React from "react";
import { Outlet } from "react-router-dom";
// this component return us the test for routing//
 
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
