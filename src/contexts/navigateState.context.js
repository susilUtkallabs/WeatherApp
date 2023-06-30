import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageData } from "../utils/localStorage.utils";
import { LOCAL_STORAGE_LOCATION_DATA } from "../constants/constants";

const NavigateState = createContext();

export const NavigateStateProvider = ({children}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");
    const [myLocation, setMyLocation] = useState("");
    const [newTabInput, setNewTabInput] = useState("");
    const [newTabLocation, setNewTabLocation] = useState(getLocalStorageData(LOCAL_STORAGE_LOCATION_DATA));
    return <NavigateState.Provider value={{navigate, search, setSearch, input, setInput, myLocation, setMyLocation, newTabLocation, setNewTabLocation, newTabInput, setNewTabInput}}>{children}</NavigateState.Provider>
}

export default NavigateState;