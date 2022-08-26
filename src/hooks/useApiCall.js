import axios from "axios"

import ApiContext from "../context/ApiContext"
import { useContext } from 'react';

export default async function GetHotelApi() {
    const [apiData, setApi] = useContext(ApiContext)
            try {
                const fetchApi = await axios.get(`https://exam-year2-api.herokuapp.com/api/hotels?populate=*`)
                console.log(fetchApi.data.data)
                setApi(fetchApi.data.data)
            }
            catch(e) {
                console.log(e)
            }
}