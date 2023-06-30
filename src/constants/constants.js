export const API_KEY = "a0c4625ec11640d7b4c34407232706";

export const LOCAL_STORAGE_LOCATION_DATA = 'myLocation';

const findCurrentDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    return currentDay;
}
export const currentDay = findCurrentDay();