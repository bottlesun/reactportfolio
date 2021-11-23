import React, { useContext, useState } from 'react';

import Modal from './Modal';
import PortfolioItem from './PortfolioItem';
import PortfolioMenu from './PortfolioMenu';
import {Infocontext} from '../../utils/ApidataList';

const Portfolio = () => {
    const data = useContext(Infocontext);

    const [menus, setMenus] = useState([
        {category : 'all' , name:'All'},
        {category : 'WEB' , name:'WEB'},
        {category : 'Responsive' , name:'Responsive'},
        {category : 'React' , name:'React'},
        {category : 'CMS' , name:'CMS'}
    ]);

    const [list,setList] = useState(data);

    const [isActive,setIsActive] = useState(false)
    const [listset,setListset] = useState({})

    const onOpen = (no) =>{
        setIsActive(true)
        setListset( list[no-1] )
    }
    const onClose = () =>{
        setIsActive(false)

    }

    const onMenu = (category) =>{
        if( category === 'all'){
            setList(data)
            
        } else{
        setList(data.filter (item => item.category === category))
        }
    }

    
    
    return (
        <div className="portfolio_wrap relative" >
           <div className="left_box d_display"></div>
            <div className="portfolio_title fadeInDown wow">
            <h2>Portfolio</h2>
            </div>
            
            <div className="portfolio">
            <PortfolioMenu menus={menus} onMenu={onMenu} />
            <PortfolioItem list={list}  onClose={onClose} onOpen={onOpen} />
            {
                isActive && <Modal  listset={listset} list={list} onClose={onClose} onOpen={onOpen} />
                
            }
            </div>
        </div>

        
    );
};

export default Portfolio;