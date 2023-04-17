import { createContext } from "react";
import MockCall from "../Api/mockCall.js";
import apiCalls from "../Api/apiCalls.js";

const service = {
    api: apiCalls,
    mock: MockCall,
}

export const SourceContext = createContext(service);



const ServiceProvider = ({ children }) => {
    return (
        <SourceContext.Provider value={{source : service.api}}>
            {children}
        </SourceContext.Provider>
    );
}

export default ServiceProvider;