import { LOCAL_STORAGE_LOCATION_DATA } from "../constants/constants";


export const setLocalStorageData = (data) => {
    localStorage.setItem(LOCAL_STORAGE_LOCATION_DATA, JSON.stringify(data));
}

export const getLocalStorageData = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}