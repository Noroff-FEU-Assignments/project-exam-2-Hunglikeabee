import axios from "axios"
import ApiContext from "../context/ApiContext"
import { useContext, useEffect } from 'react';

export default function GetHotelApi() {
    const [apiData, setApi] = useContext(ApiContext)
    useEffect(() => {
        const getApi = async () => {
            try {
                const fetchApi = await axios.get(`https://exam-year2-api.herokuapp.com/api/hotels?populate=*`)
                setApi(fetchApi.data.data)
            }
            catch(e) {
                console.log(e)
            }
        }
        getApi();
    }, [])
}