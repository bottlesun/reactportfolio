import React from 'react';
import { VscChromeClose } from "react-icons/vsc";




const Modal = ({listset,onClose}) => {
    const {title,img,skill1,skill2,skill3,skill4,contents,todey,produce,link} = listset

 

    return (
<div className="modal_wrap" onClick={()=>{onClose()}}>
    <div className="modal_item">
      <div className="close_btn"><VscChromeClose/></div>
      <div className="img_item"><img src={img} alt={title} /></div>

      <div className="modal_text">
        <h3>{title}</h3>
        <div className="modal_project">
          <h4>project</h4>
          <ul className="modal_list">
            <li>{todey}</li>
            <li>{produce}</li>
            <li className="modal_skill">
              <h5>skill</h5>
              <ul>
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
                <li>{skill4}</li>
              </ul>
            </li>
          </ul>
          <div className="modal_content">
            <h5>portfolio view</h5>
            <p>
             {contents}
            </p>
            <ul className="modal_btn">
              <li><a href={link} target="_blank">홈페이지 보러가기</a></li>
              <li><a href="#">코드리뷰하기</a></li>
              <li><a href="#">계획서 보러가기</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

    );
};

export default Modal;