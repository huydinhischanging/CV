import { useMemo } from 'react'
import './Stars.css'

// Sinh ngẫu nhiên 1 lần (useMemo) vị trí/kích thước/độ trễ của từng ngôi sao,
// tránh tính lại mỗi lần App re-render (vd khi bấm collapse sidebar).
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1, // 1px - 3px
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 3}s`,
  }))
}

/**
 * Nền "không gian" (space theme): 1 lớp cố định (position: fixed, phủ toàn
 * viewport, z-index thấp nhất) chứa nhiều chấm nhỏ (sao), mỗi sao tự nhấp
 * nháy độ mờ bằng CSS animation "twinkle" (Stars.css) với `animation-delay`
 * khác nhau để chúng không nhấp nháy đồng loạt cùng lúc.
 * `pointer-events: none` để lớp này không chặn click vào nội dung phía trên.
 */
function Stars() {
  const stars = useMemo(() => generateStars(120), [])

  return (
    <div className="stars-layer" aria-hidden="true">
      {stars.map(({ id, top, left, size, delay, duration }) => (
        <span
          key={id}
          className="star"
          style={{
            top,
            left,
            width: size,
            height: size,
            animationDelay: delay,
            animationDuration: duration,
          }}
        />
      ))}
    </div>
  )
}

export default Stars
