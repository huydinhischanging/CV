import { interests } from '../data/portfolio'
import IconCard from './IconCard'
import './Interests.css'

function Interests() {
  return (
    <div className="interests-grid">
      {interests.map(({ name, Icon, color }) => (
        <IconCard key={name} name={name} Icon={Icon} color={color} />
      ))}
    </div>
  )
}

export default Interests
