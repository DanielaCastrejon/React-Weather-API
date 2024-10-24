import React from 'react'
import './Weather.css'
import { IoSearch } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti"; /*Clear*/
import { FaCloud } from "react-icons/fa"; /*Cloud*/
import { BsCloudRainFill } from "react-icons/bs"; /* drizzle*/
import { BsCloudRainHeavyFill } from "react-icons/bs"; /*rain*/
import { BsCloudSnowFill } from "react-icons/bs"; /*snow*/
import { FiWind } from "react-icons/fi"; /*wind*/
import { WiHumidity } from "react-icons/wi"; /*humidity*/

const Weather = () => {
    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Search'/><ion-icon><IoSearch /></ion-icon>
            </div>
            <icon alt="" className='weather-icon' ><TiWeatherSunny/></icon>
            <p className='temperature'>16°C</p>
            <p className='location'>Seúl</p>
            <div className="weather-data">
                <div className="col">
                <icon alt="" className='weather-icon'><WiHumidity/></icon>
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
                </div>
                <div className="col">
                <icon alt="" className='weather-icon' ><FiWind/></icon>
                <div>
                    <p>3.5 Km/h</p>
                    <span>Wind Speed</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
