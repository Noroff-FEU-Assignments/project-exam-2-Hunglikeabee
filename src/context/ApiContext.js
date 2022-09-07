<<<<<<< HEAD
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import useLocalStorage from './../hooks/useLocalStorage';
=======
import React, { useState } from "react";
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24

const ApiContext = React.createContext([[], () => {}]);

export const ApiProvider = (props) => {
<<<<<<< HEAD
  const [apiData, setApi] = useLocalStorage("hotelsList", []);
  useEffect(() => {
    (async () => {
      try {
        const fetchApi = await axios.get(
          `https://exam-year2-api.herokuapp.com/api/hotels?populate=*`
        );
        fetchApi ? setApi(fetchApi.data.data) : setApi([])
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <ApiContext.Provider value={[apiData, setApi]}>
      {props.children}
    </ApiContext.Provider>
  );
};
=======
    const [apiData, setApi] = useState([]);
    return <ApiContext.Provider value={[apiData, setApi]}>{props.children}</ApiContext.Provider>
}

>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
export default ApiContext;