
// import Heading from "./Myheading"
// function App() {
//   const day = "Function"
//   return <>
//    <h1>Albin Sigi </h1>
//    <h2>I'm Calling a: {day}</h2>
//    <Heading title="Albin Sigi" />
//    </>
// }
// export default App

import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Page/Homepage";
import SkillSet from "./Page/Skillset";
import Project from "./Page/Projects";
import Education from "./Page/Education";
import Contact from "./Page/Contact";


function App() {

  const [currPage, setCurrPage] = useState("Home")

  return <>
    <Navbar navHandler={setCurrPage} />
    {currPage === "Home Page" && <Homepage />}
    {currPage === "SkillSet" && <SkillSet />}
    {currPage === "My Projects" && <Project />}
    {currPage === "Educational Details" && <Education />}
    {currPage === "Contact" && <Contact />}

  </>
}


export default App;


