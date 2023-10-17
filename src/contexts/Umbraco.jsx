import { createContext, useState } from "react";

export const UmbracoContext = createContext();

export const UmbracoProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <UmbracoContext.Provider value={{ data }}>{children}</UmbracoContext.Provider>
    );
};