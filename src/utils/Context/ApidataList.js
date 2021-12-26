import React, { createContext} from 'react';


export const Infocontext = createContext();

const ApidataList = (props) => {

    const PortfolioData =  [
        {
        no:1,title:'태그호이어',
        category:'WEB',
        img:'http://bottlesun.pe.kr/img/img_01.png',
        skill1:'HTML5',skill2:'CSS',skill3:'jquery',skill4:'JS',
        contents:' 해당 작업물은 태그호이어 홈페이지를 리뉴얼 했었던 작업물이며, 2019년도 이전 홈페이지 버전일때 리뉴얼을 진행 했고,처음 보이는 메인페이지에서 일반적인 홈페이지 구성을 벗어나 제품을 조금 더 강조하고 싶었으며, 여러 컨텐츠를 넣으려고 노력했습니다.해당 홈페이지의 특유 컨셉 및 색을 망치지 않는 선에서 홈페이지의 느낌을 좀 더 남성스럽게 변화를 주려고 했으며, 보여지는 화면단의기능 구현 및 여러 레이아웃 을 다루는것에 있는 연습에 초점을 맞춘 홈페이지 입니다. ',
        todey:'2020 Y / 01 - 03 D / (2개월)',
        produce:'제작인원 : 1명',
        link:"http://bottlesun.pe.kr/tagheuer/index.html",
        hash:"#Web #Design #Publishing"
        },
        {
            no:2,title:'이너피움(InnerPium)',
            category:'CMS',
            img:'http://bottlesun.pe.kr/img/img_02.jpg',
            skill1:'HTML5',skill2:'CSS',skill3:'Cafe24',skill4:'Design',
            contents:'이너피움 이라는 건강 기능 식품 브랜드를 런칭에 있어 카페24 디자인 툴을 이용해 큰 틀을 맞추고 코딩을 직접 하고, 세부 내용을 꼼꼼하게 고치고 수정하는 등의 웹 작업과 이너피움 브랜드 상품에 대한 이미지 전반적인 부분의 수정 및 보정 작업 상세 페이지 디자인 및 제작   패키징 작업 및 수정 등을 작업했습니다.',
            todey:'2021 Y / 01 - 03 D / (3개월)',
            produce:'제작인원 : 1명',
            link:"https://innerpium.com/",
            hash:"#Cafe24 #CMS #Design"
            },
            {
            no:3,title:'타이지엔',
            category:'Responsive',
            img:'http://bottlesun.pe.kr/img/img_03.jpg',
            skill1:'HTML5',skill2:'CSS',skill3:'jquery',skill4:'JS',
            contents:'반응형 웹으로 타이지엔 카페 컨설팅 관련 홍보용 랜딩페이지로, 홈페이지의 전반적인 코딩업무를 담당했었다. 원래 있던 기업 홈페이지의 구성 톤과는 조금 다른 밝은 분위기로 진행 하였고, 각 세션별로  ',
            todey:'2021 Y / 05 - 05 D / (2주)',
            produce:'제작인원 : 1명',
            link:"http://bottlesun.pe.kr/taizen/index.html",
            hash:"#Responsive #Landing #Publishing"
            },
            {
            no:4,title:'BottleSun_Portfolio',
            category:'React',
            img:'http://bottlesun.pe.kr/img/img_04.jpg',
            skill1:'HTML5',skill2:'CSS',skill3:'JS',skill4:'React',
            contents:'작업했던 내용들을 모아서 정리해볼 필요가 있다고 생각해 기획 했던, 홈페이지이다. 색감과 디자인 전박적인 컨셉은 2021 펜톤에서 가지고 왔으며, 홈페이지에  about 부분에서 쓴 글들에 나의 욕심이나 개발자로써의 발전 목표 등 가치관을 써둔것이 포인트이다. 리액트로 작업을 진행했으며, html , css 때와는 다르게 반복작업을 최소화 할 수있는 데이터를 불러오는 방식을 사용하여 진행했고, 리액트 훅의 사용의 중점을 둔 학습을 위해 작업한 홈페이지다. ',
            todey:'2021 Y / 11 - 12 D / (1개월)',
            produce:'제작인원 : 1명',
            link:"http://bottlesun.pe.kr/",
            hash:"#React #Portfolio #Publishing"
            },
    ]

    return  <Infocontext.Provider value={PortfolioData}> {props.children} </Infocontext.Provider>
};

export default ApidataList;