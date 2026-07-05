import { useState } from 'react'
import { projects } from '../data/portfolio'
import './Projects.css'

const INITIAL_COUNT = 6

function Projects() {
  const [expanded, setExpanded] = useState(false)
  // Chỉ cắt bớt danh sách khi thực sự có nhiều hơn INITIAL_COUNT project,
  // nên nút "Load more" tự động không xuất hiện nếu danh sách ngắn.
  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_COUNT)
  const hasMore = projects.length > INITIAL_COUNT

  return (
    <div>
      <div className="projects-grid">
        {visibleProjects.map(({ title, description, tag, year }) => (
          <div className="project-card" key={title}>
            <div className="project-card-head">
              <span className="project-tag">{tag}</span>
              {year && <span className="project-year">{year}</span>}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <button type="button" className="load-more-btn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Show less' : `Load more (${projects.length - INITIAL_COUNT})`}
        </button>
      )}
    </div>
  )
}

export default Projects
