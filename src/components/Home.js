import { Link, Outlet } from "react-router-dom";
import Button from "@material-ui/core/Button";
<head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style>
.responsive 
  width: 100%;
  max-width: 400px;
  height: auto;


</style>
</head>
 // this is our homepage which will route us to the necessary pages //
 
function Home() {
 return (
   <div>
    <h1 style={{color:" black"}}>Templates</h1>


<p style={{color: "black"}}>Use template button below for filling form</p>
     
       <Link to="usetemplate">
       <span style={{ marginRight: "20px" }}>
        
       <Button variant="contained" color="primary"><span>Use Template </span></Button>
  
        
       </span>
</Link>

   
     <img
       class="responsive" width="700" height="800"
            src="https://reallygooddesigns.com/wp-content/uploads/2022/03/Free-Multipurpose-Resume-Template-for-InDesign-by-Erick-Ragas.png"
            alt=""
        />
     
   </div>
     
 );
}
 
export default Home;