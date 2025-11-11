import { createContext, useState, useContext } from "react";

const ResumeContext = createContext({});

const ResumeProvider = ({children}) => {
    const { data } = null;

    return (
        <ResumeContext.Provider value={{}}>
            {children}
        </ResumeContext.Provider>
    )
};