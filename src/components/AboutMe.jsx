import { aboutMe, profile } from '../data/portfolio'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="about-row">
      <img src="/avatar.jpg" alt={profile.name} className="about-avatar" />

      {/* Card dạng bong bóng chat: có 1 "cái đuôi" tam giác trỏ sang avatar
          (tạo bằng ::before trong AboutMe.css), tách biệt hẳn với phong cách
          card vuông dùng ở Skills/Projects/Interests. */}
      <div className="about-bubble">
        <p className="about-intro">{aboutMe.intro}</p>

        {aboutMe.categories.map(({ Icon, label, lead, items, suffix }) => (
          <p className="about-line" key={label}>
            <Icon className="about-line-icon" />
            <strong>{label}</strong> {lead}{' '}
            {items.map((item, i) => (
              <span key={item}>
                <strong className="about-highlight">{item}</strong>
                {i < items.length - 1 ? ', ' : ''}
              </span>
            ))}
            {suffix ? suffix : ''}
          </p>
        ))}

        <p className="about-fun-fact">{aboutMe.funFact}</p>
      </div>
    </div>
  )
}

export default AboutMe
