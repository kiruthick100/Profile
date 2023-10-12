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

<div className="Title-Project" style={{display:"flex",position:"relative",marginTop:"400px",justifyContent:"center"}}>
                        <span style={{fontWeight:"bold",display:"flex",justifyContent:"center"}}>Project Details</span><br></br>
                        </div>
        <div className="Project-details">
       
            <div className="Details">
               
                <div className="Detail2">
            <div className="Project-Image">
                <img src={Eletricty}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Flask
                   </span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/electricityBill">view Code</a>

                    </div>
               
            </div>
            </div>
            <span style={{display:"flex",justifyContent:"center"}}> Electricty Bill Calulator</span>
               

            </div>
            <div className="Details">
            <div className="Detail2">

            <div className="Project-Image">
                <img src={Workers}  className="Image-h"style={{height:"130px",weight:"100px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Flask
                   </span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/RemoteWorkers">view Code</a>

                    </div>
                    </div>
               
            </div>
            <span style={{display:"flex",justifyContent:"center"}}>Mobile Aritican</span>
                
            </div>
            <div className="Details">
            <div className="Detail2">

            <div className="Project-Image">
                <img src={Stone}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>JavaScript

                   </span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/stone-paper-game">view Code</a>

                    </div>
               </div>
            </div>
            <span style={{display:"flex",justifyContent:"center"}}>  Stone Paper </span>
              
            </div>
            <div className="Details">
            <div className="Detail2">

            <div className="Project-Image">
                <img src={Snake}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <div style={{}}>
                   <span style={{marginLeft:"30px",marginTop:"40px"}}>HTML </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>JavaScript
                   </span><br></br>

                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/snake--game">view Code</a>
                   </div>
                    </div>
               </div>
            </div>
            <span style={{display:"flex",justifyContent:"center"}}>Snake-Game</span>
                
            </div>
            <div className="Details">
            <div className="Detail2">

            <div className="Project-Image">
                <img src={Chat}  className="Image-h" style={{height:"150px",weight:"150px"}}></img>
                <div className="Check" style={{image:{Chat}}}>
                   Language:<br></br>
                   
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>React Js </span><br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>FireBase</span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/chat-application">view Code</a>

                </div>
               </div>
            </div>
            <span style={{display:"flex",justifyContent:"center"}}>Chat-Application</span>
                
            </div>
            <div className="Details">
            <div className="Detail2">

            <div className="Project-Image">
                <img src={Flight}  className="Image-h" style={{height:"200px",weight:"200px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>React Js </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Node Js
                   </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Express Js</span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Mongo DB</span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/flight">view Code</a>

                </div>
               </div>
            </div>
            <div style={{display:"flex",alignItems:"flex-end"}}>
                <span style={{display:"flex",justifyContent:"center"}}>Flight-Ticket-Booking</span>
                </div>
            </div>
            <div className="Details">
                '                <div className="Detail2">

            <div className="Project-Image">
                <img src={Ecommerce}  className="Image-h" style={{height:"100px",width:"150px"}}></img>
                <div className="Check">
                   Language:<br></br>
                   <span style={{marginBottom:"30px",marginLeft:"30px"}}>React Js </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Node Js
                   </span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Express Js</span><br></br>
                   <span  style={{marginBottom:"30px",marginLeft:"30px"}}>Mongo DB</span><br></br>
                   <a style={{color:"Pink",marginLeft:"30px"}}href ="https://github.com/kiruthick100/flight">view Code</a>

                </div>
               </div>
            </div>
                <span style={{display:"flex",justifyContent:"center"}}>E-commerce</span>
            </div>
        </div>
        </>
    )

}
export default Project;