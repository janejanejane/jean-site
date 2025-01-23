import { createContext, useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

const MenuContext = createContext();

const MenuProvider = ({children}) => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedMenuOptions, setSelectedMenuOptions] = useState(null);

    const urlFetch = selectedMenu ? selectedMenu : null;
    const optionsFetch = selectedMenuOptions ? selectedMenuOptions : null;

    const {data, loading, error} = useFetch(urlFetch, optionsFetch);

    const onMenuChange = (menu, options) => {
        setSelectedMenu(menu);
        setSelectedMenuOptions(options);
    };

    console.log('Provider re-rendered with state:', data);

    return(
        <MenuContext.Provider value={{selectedMenu, selectedMenuOptions, onMenuChange, data, loading, error}}>
            {children}
        </MenuContext.Provider>
    );
};

const useMenuContext = () => useContext(MenuContext);

export { MenuProvider, useMenuContext };