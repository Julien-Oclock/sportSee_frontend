import { createContext } from "react";
import MockCall from "../Api/mockCall.js";
import apiCalls from "../Api/apiCalls.js";

const service = {
  api: apiCalls,
  mock: MockCall,
};
const currentEnv = process.env.REACT_APP_DATA === 'API' ?  service.api : service.mock

export const SourceContext = createContext(service.api);

/**
 * Component used to provide the service to the children
 * @param {children} children - the children of the main component
 * @returns {JSX} - the JSX of the ServiceProvider component
 */
const ServiceProvider = ({ children }) => {
  return (
    <SourceContext.Provider value={{ source: currentEnv }}>
      {children}
    </SourceContext.Provider>
  );
};

export default ServiceProvider;
