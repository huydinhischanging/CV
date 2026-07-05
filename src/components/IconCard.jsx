import './IconCard.css'

// Shared "icon + label" square card used by Skills and Interests grids,
// since both sections are visually the same pattern (icon-grid of cards).
function IconCard({ name, Icon, color }) {
  return (
    <div className="icon-card" title={name}>
      <Icon className="icon-card-icon" style={{ color }} />
      <span className="icon-card-name">{name}</span>
    </div>
  )
}

export default IconCard
