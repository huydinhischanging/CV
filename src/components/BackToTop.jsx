import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './BackToTop.css'

/**
 * Nút "lên đầu trang", chỉ HIỆN khi đã cuộn xuống quá 1 ngưỡng (300px),
 * để không che nội dung Hero lúc mới vào trang.
 * - `useEffect` + `addEventListener('scroll', ...)` theo dõi vị trí cuộn
 *   (`window.scrollY`), cập nhật state `visible`.
 * - `onClick` gọi `window.scrollTo({ top: 0, behavior: 'smooth' })` để
 *   trình duyệt tự cuộn mượt lên đầu, không cần animate bằng tay.
 */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
