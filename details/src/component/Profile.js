import Contact from "../Contact";
import Project from "./Project";
import "./css/Profile.css";
import MyPhoto from "./image/MyImage.jpg";

const Profile = () => {
  return (
    <>
      <div style={{}} className="Top-Alain">
      <span className="Header-Body">Welcome Sir</span>
      </div>
      <div className="Total">
        <div className="Name">
          Hello I Am!<br></br>
          <div className="Name-classStyle">
            Kiruthick Kumar Kannan
          </div>
          <div
            
            className="Developer"
          >
            FullStack Developer{" "}
          </div>
        </div>

        <div className="Descreption-image">
          <div className="My-Model">
            An Assertive person who would like to be committed and efficiet in
            my work and to enhance the growth of the organization by imporving
            and applying my competency at work
          </div>
          <div style={{justifySelf:"flex-end"}}className="Image1">
            <img className="Image" src={MyPhoto} alt="My Photo" />
          </div>
        </div>
      </div>
      <div  style={{position:"relative"}}className="Education-SkillsSet">
        <div className="Education" style={{ position: "absolute" }}>
          <div className="Education2">
          <span style={{display:"flex",justifyContent:"center",fontWeight:"bolder"}}>Education</span>

            <div className="degree">
              Bachelor of Computer Science and Engineering<br></br>
              <h5 className="degreeName">
                Kongu Engineering College <span className="percentage">7.60</span>
              </h5>
            </div>
            <div className="degree">
              HSC<br></br>
              <h5 className="degreeName">
                Adharsh Vidhyalaya Higher Secondary School
                <span className="percentage">61.55</span>
              </h5>
            </div>
            <div className="degree">
              SSLC<br></br>
              <h5 className="degreeName">
                Adharsh Vidhyalaya Higher Secondary School
                <span className="percentage">73.5</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="Education1">
          <div>

            <div className="Skills">
            <span style={{display:"flex"}}> Skills</span>

              <ul>
              <div className="SkillSet">
                <li>
                Html</li>
                <br></br>
                <li>
                css</li>
                <br></br><li>
                JavaScript</li>
                <br></br>
                <li>
                MERN Stack</li>
                <br></br>
                <li>
                Flask</li>
                <br></br>
                <li>
                FireBase</li>
                <br></br>
                <li>
                Java
                </li><br></br>
                <li>
                C
                </li>
              </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Smalestyle">
     <Project/>
     <Contact/>
     </div>
    </>
  );
};

export default Profile;
