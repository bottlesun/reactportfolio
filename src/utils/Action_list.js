import React, { createContext, useEffect } from 'react';

export const Infocontext = createContext();

const Action_list = (props) => {

    const contextdata = {

    

    }
    return  <Infocontext.Provider value = {contextdata}> {props.children} </Infocontext.Provider>
};

export default Action_list;