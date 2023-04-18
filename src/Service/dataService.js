import { createContext } from "react";
import MockCall from "../Api/mockCall.js";
import apiCalls from "../Api/apiCalls.js";

const service = {
    api: apiCalls,
    mock: MockCall,
}

export const SourceContext = createContext(service);


/**
 * Component used to provide the service to the children
 * @param {children} children - the children of the main component 
 * @returns {JSX} - the JSX of the ServiceProvider component
 */
const ServiceProvider = ({ children }) => {
    return (
        <SourceContext.Provider value={{source : service.api}}>
            {children}
        </SourceContext.Provider>
    );
}

export default ServiceProvider;