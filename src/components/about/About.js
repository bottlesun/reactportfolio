import React from 'react';

const About = () => {
    return (
        <div className="about_wrap relative">


        <div className="about_title fadeInDown wow">
            <h2>About</h2>
        </div>

        <div className="about">
            <div className="info_about">
                <div className="info_box"><img className="img_box_item" src="http://bottlesun.pe.kr/img/my_img.jpg" alt="" /></div>
                <div className="info_text">
                    <h3>Information</h3>
                    <ul>
                        <li><b>이름 : </b>김병선 </li>
                        <li><b>생년월일 : </b>1996. 08. 09</li>
                        <li><b>이메일 : </b>krr1996@naver.com</li>
                    </ul>

                    <div className="info_skil">
                        <h4>Skil</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JQuery | JavaScript</li>
                            <li>React</li>
                            <li>NodeJS (이해가능!)</li>
                        </ul>
                        
                    </div>

                    <div className="info_crareer">
                        <h4>Career</h4>
                        <ul className="career_wrap">
                            <li  className="career_title" >
                                <h5> - 남일애드컴 <span>2021.05 ~ ing (재직중)</span> </h5>
                                <ul className="career_list">
                                    <li>전반적인 홈페이지 기획 디자인 퍼블리싱업무</li>
                                    <li>키워드 광고 집행 및 네이버 구글애드 분석 관리</li>
                                </ul>
                            </li>
                            <li  className="career_title">
                                <h5>- 루씨 베이전씨 <span>2020.11 ~ 2021.04 (6개월)</span></h5>
                                <ul  className="career_list">
                                    <li>인플루언서 컨텐츠 디자인 마케팅</li>
                                    <li>자사 홈페이지 유지 보수 관리</li>
                                    <li>이너피움 브랜드 홈페이지 및 자사 제품 패키징 제작</li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>


            <div className="pr_about">
                <div className="about_text">
                    <h2>"배움에 욕심이 있는 개발자입니다."</h2>
                    <div className="about_keypoint">저는 발전하는게 좋습니다. 지금에 안주하거나 멈추고 싶지 않습니다.</div>
                    <div className="about_key_wrap">
                        <p className="about_keyword wow fadeIn" data-wow-delay="0.1s"><span>#</span>나아감</p>
                        <p className="about_keyword wow fadeIn" data-wow-delay="0.3s"><span>#</span>발전</p>
                        <p className="about_keyword wow fadeIn" data-wow-delay="0.5s"><span>#</span>도전</p>
                    </div>
                    <div className="about_txt">
                        <h3> 나아감 · 발전 · 도전이라는 단어를 좋아합니다.</h3>
                        <p>
                            빠르게 변화하는 상황에서 지금에서의 최선을 찾아 행동합니다.<br/>
                            무조건 경험에서는 배움이 있었고,<br/>
                            그 배움을 토대로 저를 나아가게 하고 싶습니다.<br/>
                            같은 업무를 하는 여러 사람들과 교류하고 소통하며 일을 하고 싶습니다.
                        </p>
    
                    </div>
                    <div className="resume"><a href="#">이력서 보러가기</a></div>
                </div>

            </div>


        </div>
    </div>


    );
};

export default About;