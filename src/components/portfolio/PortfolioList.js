import React from 'react';


const PortfolioList = ({item,onOpen}) => {
    const {title,img,no,hash } = item
    return (
     
                     <div className="img_box" onClick={()=> onOpen(no)}>
                        <div className="img_box_bg"></div>
                        <img className="img_box_item" src={img} alt={title} />
                        <div className="img_box_text">
                            <h2>{title}</h2>
                            <p>
                                <span>{hash}</span>
                            </p>

                        </div>
                    </div> 

    );
};

export default PortfolioList;