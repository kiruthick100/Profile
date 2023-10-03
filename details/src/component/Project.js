import MyImage from "./image/MyImage.jpg"
import Snake from "./image/snake.jpg"
import Eletricty from "./image/Electricity.webp"
import Workers from "./image/workers.jpg"
import Stone from "./image/Stone.webp"
import Ecommerce from "./image/Commerce.jpeg"
import Chat from "./image/chat.webp"
import Flight from "./image/flight1.webp"
import "./css/project.css";
const Project =()=>
{
    return(
        <>
       
        <div className="Project-details">
        <span style={{fontWeight:"bold"}}>Project Details</span>
            <div className="Details">
            <div className="Project-Image">
                <img src={Eletricty}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Flask
                   </span><br></br>
                    </div>
               
            </div>
                Electricty Bill Calulator

            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Workers}  className="Image-h"style={{height:"130px",weight:"100px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Flask
                   </span><br></br>
                    </div>
               
            </div>
                Mobile Aritican
            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Stone}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px"}}>JavaScript
                   </span><br></br>
                    </div>
               
            </div>
                Stone Paper 
            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Snake}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px"}}>JavaScript
                   </span><br></br>
                    </div>
               
            </div>
                Snake-Game
            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Chat}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check" style={{image:{Chat}}}>
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>React Js </span><br></br>
                   <span>FireBase</span>
                </div>
               
            </div>
                Chat-Application
            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Flight}  className="Image-h" style={{height:"200px",weight:"200px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>React Js </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Node Js
                   </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Express Js</span><br></br>
                   <span  style={{marginBottom:"30px"}}>Mongo DB</span>
                </div>
               
            </div>
            <div style={{display:"flex",alignItems:"flex-end"}}>
                Flight-Ticket-Booking
                </div>
            </div>
            <div className="Details">
            <div className="Project-Image">
                <img src={Ecommerce}  className="Image-h" style={{height:"100px",width:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px"}}>React Js </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Node Js
                   </span><br></br>
                   <span  style={{marginBottom:"30px"}}>Express Js</span><br></br>
                   <span  style={{marginBottom:"30px"}}>Mongo DB</span>
                </div>
               
            </div>
                E-commerce
            </div>
        </div>
        </>
    )

}
export default Project;