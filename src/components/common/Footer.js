import React, { useEffect, useState } from 'react';
import '../../utils/css/footer.css'

const Footer = () => {
const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
      let icon = document.getElementById('icons');
      let name_logo = document.querySelector('.logo_square');
       
       //위치에따른 이벤트 주기
       if(ScrollY <= 650){
   
           icon.classList.add('offdisplay');
           icon.classList.remove('ondisplay');
           name_logo.style.color = `#fff`;
   
       } else{
           icon.classList.add('ondisplay');
           icon.classList.remove('offdisplay');
           name_logo.style.color = `#333`;
       }
       
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
    
  });

    return (
        <div className="footer_wrap">
        <div className="footer_capy">Portfolio_by. <strong>BOTTLESUN</strong></div>
        <div className="footer">
            <p className="footer_content">해당 사이트는 상업적 목적이 아닌 개인용 포트폴리오를 위해 제작한 사이트로,<br className="m_display" /> 홈페이지 일부 내용 및 이미지에 대한 저작권이 따로 있음을 밝혀드립니다.
            </p>
        </div>
        <div id="icons" className="icon_top_wrap d_display offdisplay" onClick={ () => window.scrollTo(0,document.body.scrollTop) }>
            <div className="icon_top"><span>T</span>OP</div>
        </div>
    </div>

    );
};

export default Footer;