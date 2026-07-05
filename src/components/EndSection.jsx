import { profile } from '../data/portfolio'
import './EndSection.css'

function EndSection() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="end-card">
        <p className="end-message">
          Finally, I would like to say <strong>"Thank You"</strong> for taking the time to look
          at my CV profile.
        </p>
        <p className="end-message">
          It's not who I am underneath, but what I build that defines me. Let's create something
          legendary.
        </p>

        {/* Gif mèo do người dùng tự tải và đặt vào public/cat.gif; Vite phục vụ
            mọi file trong public/ tại đường dẫn gốc "/", nên chỉ cần src="/cat.gif".
            Bọc thêm 1 khung riêng (end-cat-frame) để ảnh có viền/box giống các
            khối khác trong trang (Experience, Projects...) thay vì trôi nổi tự do. */}
        <div className="end-cat-frame">
          <img src="/cat.gif" alt="waving cat" className="end-cat-gif" />
        </div>
      </div>

      <p className="end-copyright">© {year} {profile.name}</p>
    </>
  )
}

export default EndSection
