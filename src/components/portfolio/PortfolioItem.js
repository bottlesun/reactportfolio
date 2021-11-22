import React from 'react';
import PortfolioList from './PortfolioList';


const PortfolioItem = ({list,onOpen}) => {
    return (

      
     <div className="item_wrap">
        <div className="item_boxwrap " >
{
    list.map( item => <PortfolioList key={item.no} item={item} onOpen={onOpen} />)
}

    </div>
    </div>

    );
};

export default PortfolioItem;