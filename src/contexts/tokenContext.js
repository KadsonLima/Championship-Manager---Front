import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function TokenProvider({children}){
    const [token , setToken] = useState(null);
    const header = (token)&&{'headers':{'Authorization':`Bearer ${token.token}`}};

    return (
        <TokenContext.Provider value={{token, setToken, header}}>
            {children}
        </TokenContext.Provider>
    )


}