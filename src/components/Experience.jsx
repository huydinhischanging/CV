import { experience } from '../data/portfolio'
import './Experience.css'

function Experience() {
  return (
    <div className="experience-card">
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role + item.company}>
            <div className="timeline-dot" />
            <div>
              <h3>{item.role} · {item.company}</h3>
              <span className="period">{item.period}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
