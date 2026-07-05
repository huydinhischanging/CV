// Toàn bộ nội dung tĩnh của trang portfolio nằm ở đây, tách khỏi component
// để đổi thông tin (tên, kỹ năng, dự án...) không cần đụng vào JSX/logic.
import {
  FaHome,
  FaUserCheck,
  FaBriefcase,
  FaAtom,
  FaGraduationCap,
  FaLayerGroup,
  FaCommentDots,
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
  FaReact,
  FaTrello,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaStackOverflow,
  FaCode,
  FaMicrochip,
  FaJava,
  FaPython,
  FaGamepad,
  FaPlane,
  FaBasketballBall,
  FaSwimmer,
  FaChess,
} from 'react-icons/fa'
import { SiIntel, SiTensorflow, SiBlender } from 'react-icons/si'
import { GiCircuitry } from 'react-icons/gi'

export const menuItems = [
  { id: 'home', label: 'Home', Icon: FaHome },
  { id: 'about', label: 'About', Icon: FaUserCheck },
  { id: 'experience', label: 'Experience', Icon: FaBriefcase },
  { id: 'skills', label: 'Skills', Icon: FaAtom },
  { id: 'projects', label: 'Projects', Icon: FaGraduationCap },
  { id: 'interest', label: 'Interest', Icon: FaLayerGroup },
  { id: 'end', label: 'The end', Icon: FaCommentDots },
]

export const floatingTechIcons = [
  { label: 'React', Icon: FaReact, top: '6%', left: '26%', size: 40, duration: '6s', color: '#61dafb' },
  { label: 'Trello', Icon: FaTrello, top: '4%', left: '70%', size: 40, duration: '7s', color: '#0079bf' },
  { label: 'CSS3', Icon: FaCss3Alt, top: '10%', left: '94%', size: 36, duration: '5.5s', color: '#2965f1' },
  { label: 'GitHub', Icon: FaGithub, top: '18%', left: '48%', size: 44, duration: '6.5s', color: '#8b8fa3' },
  { label: 'JavaScript', Icon: FaJs, top: '40%', left: '92%', size: 40, duration: '6s', color: '#f7df1e' },
  { label: 'StackOverflow', Icon: FaStackOverflow, top: '36%', left: '8%', size: 42, duration: '7s', color: '#f48024' },
  { label: 'Sass', Icon: FaSass, top: '56%', left: '4%', size: 38, duration: '5s', color: '#cc6699' },
  { label: 'Node.js', Icon: FaNodeJs, top: '74%', left: '28%', size: 40, duration: '6.5s', color: '#68a063' },
  { label: 'Docker', Icon: FaDocker, top: '76%', left: '80%', size: 42, duration: '6s', color: '#2496ed' },
  { label: 'HTML5', Icon: FaHtml5, top: '88%', left: '96%', size: 34, duration: '5.5s', color: '#e34c26' },
  { label: 'Code', Icon: FaCode, top: '88%', left: '2%', size: 36, duration: '7s', color: '#8be9fd' },
]

export const profile = {
  name: 'Đình Huy',
  title: 'Software Developer',
  avatar: '/avatar.png',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/huydinhischanging', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huy-%C4%91%C3%ACnh-948994202/', Icon: FaLinkedinIn },
  { label: 'Email', href: 'mailto:ititiu21213@student.hcmiu.edu.vn', Icon: FaEnvelope },
]

// About Me hiển thị dạng "bong bóng chat" (avatar bên trái + card bên phải).
// Mỗi mục trong `categories` render: icon + nhãn in đậm + câu dẫn + danh sách
// từ khoá in đậm (items), giống cách 1 CV thường nhấn mạnh tên công nghệ.
export const aboutMe = {
  intro: 'I am Đình Huy, a Software Developer from Ho Chi Minh City, Vietnam.',
  categories: [
    {
      Icon: FaMicrochip,
      label: 'Embedded:',
      lead: 'I have hands-on experience with',
      items: ['ESP32', 'STM32', 'PIC16F877A'],
      suffix: '...etc',
    },
    {
      Icon: SiIntel,
      label: 'Digital Design:',
      lead: 'I work with',
      items: ['Altera Quartus (VLSI / CPU design)', 'Cadence (PCB design)'],
    },
    {
      Icon: FaCode,
      label: 'Programming:',
      lead: 'I have experience in',
      items: ['C', 'Assembly', 'Java', 'Python', 'JavaScript'],
      suffix: '...etc',
    },
  ],
  funFact: 'Outside of work, I enjoy playing chess and building robotics projects.',
}

export const experience = [
  { role: 'B.Eng. in Electrical & Computer Engineering', company: 'International University (HCMIU), 5-year program', period: '2021 - 2026', description: 'Coursework and lab projects spanning embedded systems, digital/VLSI design, and IoT/full-stack development.' },
  { role: 'Embedded Systems Projects', company: 'University Projects', period: '2022 - 2025', description: 'Designed, built, and programmed microcontroller-based systems (ESP32, STM32, PIC16F877A), including a fire alarm system, a line-following robot, and IoT monitoring devices.' },
  { role: 'IoT & Full-stack Developer', company: 'Personal / Coursework Projects', period: '2024 - 2025', description: 'Built IoT dashboards and full-stack web applications, connecting embedded devices to cloud/back-end services for real-time monitoring and control.' },
  { role: 'Event Organizer', company: 'Vietnam National University HCM (VNU-HCM)', period: '2022', description: 'Organized and coordinated logistics for a student event at Vietnam National University, Ho Chi Minh City.' },
  { role: 'Event Organizer', company: 'International University (HCMIU)', period: '2023', description: 'Organized and coordinated logistics for a student event at International University, Ho Chi Minh City.' },
]

// Skills hiển thị dạng lưới icon (giống ảnh tham khảo), mỗi mục là 1 card
// vuông bo góc chứa icon + tên công nghệ/kỹ năng.
export const skills = [
  { name: 'ESP32 / STM32 / PIC', Icon: FaMicrochip, color: '#38bdf8' },
  { name: 'C / Assembly', Icon: FaCode, color: '#a78bfa' },
  { name: 'VLSI (Intel/Altera Quartus)', Icon: SiIntel, color: '#0071c5' },
  { name: 'PCB Design (Cadence)', Icon: GiCircuitry, color: '#34d399' },
  { name: 'Java', Icon: FaJava, color: '#f89820' },
  { name: 'Python', Icon: FaPython, color: '#3776ab' },
  { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
  { name: 'React', Icon: FaReact, color: '#61dafb' },
  { name: 'AI / Machine Learning', Icon: SiTensorflow, color: '#ff8f00' },
  { name: '3D Modeling', Icon: SiBlender, color: '#e87d0d' },
  { name: 'Git / GitHub', Icon: FaGithub, color: '#cbd5e1' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ed' },
]

export const projects = [
  { title: 'IC Fire Alarm System', description: 'Fire detection and alarm system built around embedded IC/microcontroller logic, triggering an alert when smoke/heat thresholds are exceeded.', tag: 'Embedded', year: '2022' },
  { title: 'Line-following Robot', description: 'Autonomous robot that tracks a path in real time using IR sensors and closed-loop microcontroller control.', tag: 'Robotics', year: '2022' },
  { title: 'AI Image Processing', description: 'Computer vision project for detecting and recognizing figures/objects in images.', tag: 'AI', year: '2022' },
  { title: 'Robotic Arm', description: 'Multi-joint robotic arm controlled programmatically to perform pick-and-place tasks.', tag: 'Robotics' },
  { title: 'CPU Design (Altera)', description: 'Custom CPU designed and simulated at the digital logic level using Altera Quartus.', tag: 'VLSI' },
  { title: 'Chess AI', description: 'Self-playing chess engine built as a coursework project, implementing game-tree search to select moves.', tag: 'AI' },
  { title: 'IoT Smart Home', description: 'IoT system for remotely monitoring and controlling home devices in real time.', tag: 'IoT', year: '2024' },
  { title: 'AMG IoT Hydropower Energy Monitoring', description: 'IoT-based monitoring system tracking hydropower energy generation and consumption.', tag: 'IoT', year: '2025' },
  { title: 'Fashion E-commerce', description: 'Full-stack e-commerce web application built as a coursework project, covering product catalog, cart, and checkout flows.', tag: 'Web', year: '2025' },
]

// Interests hiển thị dạng lưới icon giống Skills.
export const interests = [
  { name: 'Gaming', Icon: FaGamepad, color: '#a78bfa' },
  { name: 'Travel', Icon: FaPlane, color: '#38bdf8' },
  { name: 'Basketball', Icon: FaBasketballBall, color: '#f97316' },
  { name: 'Swimming', Icon: FaSwimmer, color: '#34d399' },
  { name: 'Chess', Icon: FaChess, color: '#f4c952' },
]
