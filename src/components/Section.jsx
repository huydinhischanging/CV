import './Section.css'

function Section({ id, title, children }) {
  return (
    <section id={id} className="page-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

export default Section
