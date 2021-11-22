import React, { useEffect, useState } from 'react';
import { VscChromeClose } from "react-icons/vsc";




const Modal = ({listset,onClose}) => {
    const {title,img,skill1,skill2,skill3,skill4,contents,todey,produce,link} = listset

 

    return (
<div class="modal_wrap" onClick={()=>{onClose()}}>
    <div class="modal_item">
      <div class="close_btn"><VscChromeClose/></div>
      <div class="img_item"><img src={img} alt={title} /></div>

      <div class="modal_text">
        <h3>{title}</h3>
        <div class="modal_project">
          <h4>project</h4>
          <ul class="modal_list">
            <li>{todey}</li>
            <li>{produce}</li>
            <li class="modal_skill">
              <h5>skill</h5>
              <ul>
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
                <li>{skill4}</li>
              </ul>
            </li>
          </ul>
          <div class="modal_content">
            <h5>portfolio view</h5>
            <p>
             {contents}
            </p>
            <ul class="modal_btn">
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