import React from 'react';

const MenuItem = ({menu,onMenu}) => {
    const {category,name} = menu
    return (
        <li>
            <a onClick={()=> onMenu(category)}>
                {name}
            </a>
        </li>
    );
};

export default MenuItem;