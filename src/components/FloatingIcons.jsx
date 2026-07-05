import { useEffect, useState } from 'react'
import { floatingTechIcons } from '../data/portfolio'
import './FloatingIcons.css'

/**
 * Các icon công nghệ trôi nổi phía sau Hero, DÀN RỘNG khắp khu vực Hero
 * (không dồn cụm vào giữa).
 *
 * VỊ TRÍ GỐC: mỗi icon dùng toạ độ `top/left` (đơn vị %) khai báo sẵn trong
 * data/portfolio.js — đây là % theo chiều rộng/cao của khu vực Hero, nên
 * icon nào left:"4%" thì sát mép trái, left:"96%" thì sát mép phải, v.v.
 * Cách này đảm bảo icon rải khắp 4 góc màn hình thay vì bị gom vào 1 khối
 * tròn nhỏ ở giữa (như cách tính toạ độ hình cầu 3D trước đây).
 *
 * HIỆU ỨNG 3D vẫn giữ, chỉ cộng THÊM vào vị trí gốc chứ không thay thế nó:
 * - `.floating-icons` có `perspective` (CSS) để các phép xoay 3D bên dưới có
 *   chiều sâu thật thay vì bị "ép phẳng".
 * - `.icons-scene` xoay theo chuột (rotateX/rotateY, tính bằng `useEffect`
 *   + `mousemove`, giống cơ chế trước) — nghiêng CẢ khối icon theo chuột.
 * - Mỗi icon có `depth` riêng (translateZ, xen kẽ âm/dương theo index) để
 *   tạo lớp gần/xa, `.icon-tumble` tự xoay 3D liên tục, `.floating-icon` bay
 *   lên xuống (animation "float", giữ nguyên).
 * Vì `top/left` đặt trên lớp NGOÀI CÙNG (không animate), và depth/float/tumble
 * đều nằm ở các lớp lồng bên trong với transform riêng, không lớp nào ghi đè
 * transform của lớp khác.
 */
function FloatingIcons() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      const ratioX = e.clientX / window.innerWidth - 0.5
      const ratioY = e.clientY / window.innerHeight - 0.5
      setTilt({
        rotateY: ratioX * 30,
        rotateX: -ratioY * 24,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="floating-icons" aria-hidden="true">
      <div
        className="icons-scene"
        style={{ transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` }}
      >
        {floatingTechIcons.map(({ label, Icon, top, left, size, duration, color }, index) => {
          // Xen kẽ âm/dương để có lớp icon "gần" và lớp icon "xa" khác nhau.
          const depth = ((index % 5) - 2) * 50 // -100px .. 100px
          return (
            // Lớp NGOÀI: giữ nguyên vị trí rộng khắp top/left (không animate).
            <div key={label} className="icon-position" style={{ top, left }}>
              {/* Lớp độ sâu: chỉ translateZ, tách riêng để không đụng transform khác. */}
              <div className="icon-depth" style={{ transform: `translateZ(${depth}px)` }}>
                {/* Lớp GIỮA: animation "float" (translateY) trên transform riêng. */}
                <div
                  className="floating-icon"
                  style={{ fontSize: size, color, animationDuration: duration }}
                >
                  {/* Lớp TRONG: animation "tumble" (rotateX+rotateY) trên transform riêng. */}
                  <span
                    className="icon-tumble"
                    style={{ animationDuration: `${10 + (index % 4) * 3}s` }}
                  >
                    <Icon />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FloatingIcons
