import './Navbar.css';
const Navbar = ({ navHandler }) => {



    const navBtnHandler = (e) => {
        console.log(e.target.value)
        navHandler(e.target.value)
    }



    return <div className="navbar">
        <button onClick={navBtnHandler} value="Home Page">Homepage</button>
        <button onClick={navBtnHandler} value="SkillSet">My SkillSet</button>
        <button onClick={navBtnHandler} value="My Projects">Projects</button>
        <button onClick={navBtnHandler} value="Educational Details">Educational Details</button>
        <button onClick={navBtnHandler} value="Contact">Contact Me</button>
    </div>
}


export default Navbar