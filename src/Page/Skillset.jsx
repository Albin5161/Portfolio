import './Skillset.css';

const SkillSet = () => {
  return (
    <div className="skillset-container">
      <div className="skill-column">
        <h3>Tools</h3>
        <ul>
          <li>Figma</li>
          <li>Notion</li>
          <li>Framer</li>
          <li>VS Code</li>
        </ul>
      </div>
      <div className="skill-column">
        <h3>UX Skills</h3>
        <ul>
          <li>Wireframing</li>
          <li>Prototyping</li>
          <li>User Research</li>
          <li>Usability Testing</li>
          <li>Design Systems</li>
        </ul>
      </div>
      <div className="skill-column">
        <h3>UI Skills</h3>
        <ul>
          <li>Typography</li>
          <li>Color Theory</li>
          <li>Layout Design</li>
          <li>Micro-interactions</li>
        </ul>
      </div>
    </div>
  )
}


export default SkillSet