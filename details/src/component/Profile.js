import Project from "./Project";
import "./css/Profile.css";
import MyPhoto from "./image/MyImage.jpg";

const Profile = () => {
  return (
    <>
      <div className="Top-Alain"></div>
      <div className="Total">
        <div className="Name">
          Hello I Am!<br></br>
          <div style={{ marginTop: "10px", marginLeft: "80px" }}>
            Kiruthick Kumar Kannan
          </div>
          <div
            style={{ marginTop: "10px", marginLeft: "80px" }}
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
          <div className="My-Image">
            <img className="Image" src={MyPhoto} alt="My Photo" />
          </div>
        </div>
      </div>
      <div  style={{position:"relative"}}className="Education-SkillsSet">
        <div className="Education" style={{ position: "absolute" }}>
          <div className="Education2">
            Education
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
              Skills
              <div className="SkillSet">
                Html
                <br></br>
                css
                <br></br>
                JavaScript
                <br></br>
                MERN Stack
                <br></br>
                Flask
                <br></br>
                FireBase
                <br></br>
                Java<br></br>
                C
              </div>
            </div>
          </div>
        </div>
      </div>
     <Project/>
    </>
  );
};

export default Profile;
