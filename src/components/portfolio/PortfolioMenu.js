import React from 'react';
import MenuItem from './MenuItem';



const PortfolioMenu = ({onMenu,menus}) => {
    
    return (
        <ul className="portfolio_bar wow fadeInDown" data-wow-delay="0.3s">
            {
                menus.map((menu,index) => <MenuItem key={index} menu={menu} onMenu={onMenu}/> )
            }
        </ul>
    );
};

export default PortfolioMenu;