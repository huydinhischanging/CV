import { skills } from '../data/portfolio'
import IconCard from './IconCard'
import './Skills.css'

function Skills() {
  return (
    <div className="skills-grid">
      {skills.map(({ name, Icon, color }) => (
        <IconCard key={name} name={name} Icon={Icon} color={color} />
      ))}
    </div>
  )
}

export default Skills
