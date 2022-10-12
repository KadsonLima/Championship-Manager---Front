import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function TokenProvider({children}){
    const [token , setToken] = useState(null);
    const header = (token)&&{'headers':{'Authorization':`Bearer ${token.token}`}};
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <TokenContext.Provider value={{token, setToken, header, modalIsOpen, setIsOpen}}>
            {children}
        </TokenContext.Provider>
    )


}
