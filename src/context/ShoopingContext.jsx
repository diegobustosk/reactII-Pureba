import { createContext, useState } from "react";
export const ShoppingContext = createContext();


const ShoppingProvider = ({ children }) => {
    const [Shopping, setShopping] = useState(null);
    return (
    <ShoppingContext.Provider value={{ Shopping, setShopping }}>
    {children}
    </ShoppingContext.Provider>
    );
};


export default ShoppingProvider;