import React from 'react'
import './Weather.css'
import { IoSearch } from "react-icons/io5";

const Weather = () => {
    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Search'/><ion-icon><IoSearch /></ion-icon>
            </div>
        </div>
    )
}

export default Weather
