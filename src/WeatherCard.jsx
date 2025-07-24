import React from 'react'

export const WeatherCard = ({ weather }) => {

    return (

        <><div className="card">
            {!weather ? (<div className="city">No City Found</div>) : (<div className='center'>  <div className="city">
                {weather.location.name}</div>
                <p className="weather">{weather.current.condition.text}</p>
                <img alt={weather.current.condition.text} src={weather.current.condition.icon}></img>
                <p className="temp">{weather.current.temp_c}°</p>
                <div className="spa"></div>
                <div className="div-flex">
                    <div className="aqi fl"> <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M12 2C7 6 6 11 9 15C11 18 16 19 20 16C18 20 12 22 8 19C3.5 15.5 4.5 8 12 2Z" fill="#81C784" />


                        <path d="M6 17C7.5 17 8.5 18 10 18C11.5 18 12.5 17 14 17" stroke="#4FC3F7" stroke-width="2" stroke-linecap="round" />
                        <path d="M6 20C7.5 20 8.5 21 10 21C11.5 21 12.5 20 14 20" stroke="#4FC3F7" stroke-width="2" stroke-linecap="round" />
                    </svg>
                        {weather.current.air_quality.pm2_5}
                    </div>
                    <div className="aqi fl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C12 2 6 9 6 13.5C6 17.6421 9.35786 21 13.5 21C17.6421 21 21 17.6421 21 13.5C21 9 15 2 15 2H12Z" fill="#4FC3F7" />
                    </svg>
                        {weather.current.humidity}
                    </div>
                    <div className="aqi fl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#4FC3F7" stroke-width="2" />
                            <line x1="12" y1="12" x2="17" y2="7" stroke="#0288D1" stroke-width="2" />
                            <circle cx="12" cy="12" r="1.5" fill="#0288D1" />
                        </svg>

                        {weather.current.pressure_in}
                    </div>
                </div>
                <div className="spa"></div>
                <div className="minmaxContainer">
                    <div className="min">
                        <p className="minHeading">Min</p>
                        <p className="minTemp">{weather.current.dewpoint_c}°</p>
                    </div>
                    <div className="max">
                        <p className="maxHeading">Max</p>
                        <p className="maxTemp">{weather.current.heatindex_c}°</p>
                    </div>
                </div><div className="spa"></div>
                <div className="country wht"><svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8 2 5 5.13 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13 16 2 12 2Z"
                        fill="#C8E6C9" stroke="#4CAF50" stroke-width="2" />
                    <circle cx="12" cy="9" r="2.5" fill="#2E7D32" />
                </svg>
                    {weather.location.region} ({weather.location.country}) </div>
                <div className="country wht"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#BBDEFB" stroke="#1976D2" stroke-width="2" />
                    <path d="M12 7V12L16 14" stroke="#0D47A1" stroke-width="2" stroke-linecap="round" />
                </svg>
                    {weather.location.localtime} </div>
            </div>
            )}

        </div></>
    )
}
