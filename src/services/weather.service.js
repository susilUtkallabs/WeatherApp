import { API_KEY, LOCAL_STORAGE_LOCATION_DATA } from '../constants/constants';
import axios from '../utils/axios.utils';
import { setLocalStorageData } from '../utils/localStorage.utils';

export const getForecast = async (location)=>{
    try{
        const response = await axios.get(`/forecast.json?q=${location}&days=1&key=${API_KEY}`);
        return response;
    }catch(error){
        console.log(error.response.data.error);
    }
}