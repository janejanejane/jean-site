import { createContext, useState, useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

// const MenuContext = createContext({
//     urlFetch: null,
//     setUrlFetch: () => {},
//     optionsFetch: null,
//     setOptionsFetch: () => {},
//     data: null,
//     loading: false,
//     error: null
// });

const MenuContext = createContext({});

const MenuProvider = ({children}) => {
    const [urlFetch, setUrlFetch] = useState(null);
    const [optionsFetch, setOptionsFetch] = useState(null);
    const [currentSection, setCurrentSection] = useState('intro');

    const {data, loading, error, stats} = useFetch(urlFetch, optionsFetch);

    return(
        <MenuContext.Provider value={{
            urlFetch, 
            setUrlFetch, 
            optionsFetch, 
            setOptionsFetch, 
            currentSection,
            setCurrentSection,
            data, 
            loading, 
            error,
            stats
        }}>
            {children}
        </MenuContext.Provider>
    );
};

const useMenuContext = () => useContext(MenuContext);

export { MenuProvider, useMenuContext };