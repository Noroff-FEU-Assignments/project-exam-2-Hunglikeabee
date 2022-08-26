import React, { useState } from "react";

const ApiContext = React.createContext([[], () => {}]);

export const ApiProvider = (props) => {
    const [apiData, setApi] = useState([]);
    return <ApiContext.Provider value={[apiData, setApi]}>{props.children}</ApiContext.Provider>
}

export default ApiContext;