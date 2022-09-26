import React from "react";
import axios from "axios";
import { useEffect } from "react";
import useLocalStorage from './../hooks/useLocalStorage';

const ApiContext = React.createContext([[], () => {}]);

export const ApiProvider = (props) => {
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
export default ApiContext;