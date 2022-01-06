import React, { useEffect, useState } from 'react';

const Main = () => {
    const [isAboutMe,setIsAboutMe] = useState("About Me?")


    useEffect(()=>{
        let target = document.querySelector("#dynamic");

        function randomString(){
            let stringArr = ["PUBLISHER","DESIGNER","FRONT-END"];
            let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
            let selectStringArr = selectString.split("");
            
            return selectStringArr;
        }

        //타이핑 리셋
        function resetTyping(){
            target.textContent = "";
            dynamic(randomString());
        }

        //한글자씩 텍스트 출력 함수
        function dynamic(randomArr) {
            if(randomArr.length > 0){
                target.textContent += randomArr.shift();
                setTimeout(()=>{
                    dynamic(randomArr);
                },80);
            }else{
                setTimeout(resetTyping,3500);
            }
        }

        dynamic(randomString());


    },[])



/* 글자 마우스 오버 시 변경  */
function textonChange(){
     setIsAboutMe('Contact Me!')
    }
function textoutChange(){
        setIsAboutMe('About Me?')
    }




    return (
        <div id="main">
        <div className="logo_main"> <img src="img/logo_img.png" alt="" /></div>
        <div className="logo_wrap d_display fadeIn wow">
            <h5 className="logo_square "> BOTTLESUN _ Portfolio </h5>
        </div>

        <div className="container">
            <div className="main_wrap">
                <div className="square_wrap">
                    <div className="square ani_move"></div>
                </div>
                <div className="main_title ani_move">
                    <div className="main_title_circle ani_move">
                        <h2> Web <span id="dynamic" > </span></h2>
                        <span className="text"></span>
                    </div>
                    <p className="fadeIn wow">일에 욕심 있는 ADTECH, 퍼블리셔</p>
                </div>
            </div>
        </div>
       {/**<!--container--> */} 
        <div className="contact_us fadeInDown wow" onClick={()=>{window.scrollTo(0,document.body.scrollHeight);}}>
            <div id="context" onMouseOver={textonChange} onMouseOut={textoutChange}>{isAboutMe}</div>
        </div>
        {/**<!--main--> */}
    </div>

    );
};

export default Main;