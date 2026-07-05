import { menuItems, profile } from '../data/portfolio'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">{profile.name}</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(({ id, label, Icon }) => (
            <li key={id}>
              <a href={`#${id}`}>
                <Icon className="nav-icon" />
                <span className="label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
