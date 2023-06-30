import React, { useContext, useEffect } from "react";
import NavigateState from "./contexts/navigateState.context";
import { getForecast } from "./services/weather.service";
import { LOCAL_STORAGE_LOCATION_DATA, currentDay } from "./constants/constants";
import { getLocalStorageData, setLocalStorageData } from "./utils/localStorage.utils";

const Weather1 = () => {

    const { search, setSearch, newTabInput, setNewTabInput,newTabLocation, setNewTabLocation } = useContext(NavigateState);

    const handleInput = (e) => {
        e.preventDefault();
        setNewTabInput(e.target.value);
    }

    const submitLocation = async (e) => {
        e.preventDefault();
        try {
            setSearch(newTabInput);
            const resp = await getForecast(newTabInput);
            setNewTabLocation(resp.data);
            setNewTabInput("");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!search){
            const fetchData = async () => {
                const resp = await getForecast(getLocalStorageData(LOCAL_STORAGE_LOCATION_DATA));
                setNewTabLocation(resp.data);
            }
            fetchData();
        }
    }, []);

    return (
        <div className="body">
            <div className="containers">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{currentDay}</h2><span className="date-day">{newTabLocation.current?.last_updated.split(" ")[0]}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{newTabLocation.location?.name}, {newTabLocation.location?.region}, {newTabLocation.location?.country}</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{newTabLocation.current?.feelslike_c}°C</h1>
                        <h3 className="weather-desc">{newTabLocation.current?.condition.text}</h3>
                        <img src={newTabLocation.current?.condition.icon} alt="" style={{ backgroundColor: "black" }} />
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{newTabLocation.current?.humidity}</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{newTabLocation.current?.wind_kph} km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                            <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fri</span><span className="day-temp">19°C</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="location-container">
                        <form autoComplete="off" onSubmit={submitLocation}>
                            <input type="text" id="ip2" value={newTabInput} onChange={handleInput} placeholder="Search Location" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather1;