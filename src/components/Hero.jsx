import { profile, socialLinks } from '../data/portfolio'
import FloatingIcons from './FloatingIcons'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <FloatingIcons />

      <div className="hero-content">
        <img src="/avatar.jpg" alt={profile.name} className="avatar" />
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>

        <div className="social-links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
        </div>

        <div className="hero-actions">
          <a
            href="https://www.linkedin.com/in/huy-%C4%91%C3%ACnh-948994202/"
            target="_blank"
            rel="noreferrer"
            className="hire-btn"
          >
            Hire me
          </a>
          {/* Không có sẵn file CV PDF thật, nên dùng window.print() của trình
              duyệt: CSS in ấn (index.css, @media print) ẩn sidebar/hiệu ứng
              trang trí, chỉ giữ lại nội dung -> người dùng "Save as PDF" được
              ngay từ hộp thoại in của trình duyệt, không cần server. */}
          <button type="button" className="download-btn" onClick={() => window.print()}>
            Download CV
          </button>
        </div>

        <a href="#about" className="scroll-down">
          <span>Scroll down</span>
          <span className="arrow">⌄</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
