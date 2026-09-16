import React from "react";

const CurrentWeather = ({ city, data }: { city: any; data: any }) => {
    return (
        <div>
            <p>
                Weather for: {city.name} - {city.country}
            </p>
            <p>Time: {data.current.time}</p>
            <p>Now: {data.current.temperature_2m} Celsius</p>
            <p>Wind speed: {data.current.wind_speed_10m}</p>
            <br />
        </div>
    );
};

export default CurrentWeather;
