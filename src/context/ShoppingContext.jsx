import { createContext, useState } from "react";
export const ShoppingContext = createContext();


const ShoppingProvider = ({ children }) => {
    const [shopping, setShopping] = useState({});
    return (
    <ShoppingContext.Provider value={{ shopping, setShopping }}>
    {children}
    </ShoppingContext.Provider>
    );
};


export default ShoppingProvider;