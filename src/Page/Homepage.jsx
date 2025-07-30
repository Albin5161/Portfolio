
import './Homepage.css';
const Homepage = () => {


  return <div className="Homepage">
    <h1><marquee>Hi, I'm Albin!</marquee></h1>
    <img src="/Images/Albin1.png" alt="Albin" width="300" />
    {/* <img src="/Images/Albin1.png" alt="Albin" width="300" />
    <img src="/Images/Albin1.png" alt="Albin" width="300" /> */}
    <a
      href="https://drive.google.com/file/d/1_pjqeDO0RBVGOVzTcRX2xzrHd2riNp9h/view?usp=drive_link" 
       className="resume-link">View Resume</a>
  </div>

}


export default Homepage