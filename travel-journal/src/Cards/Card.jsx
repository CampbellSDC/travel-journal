import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'



export default function Card(props) {
    
   
    return (
        <>
        
        <div className="card-container">
            <div className="image-container" style="background-image=../src/assets/${props.img" ></div>

            <div className="card-text-container">

                <div className="top-text">

                    <FontAwesomeIcon className="loc-icon" icon={faLocationDot} />
                    <h4 className="location"> {props.location}</h4>
                    <a className="maps-link" href="#">View on Google Maps</a>

                </div>
            
            <h1 className="text-title">{props.title}</h1>
            <strong><p className="travel-dates">{props.dates.beginDate} - {props.dates.endDate}</p></strong>
            <p className="description">{props.description}</p>
            </div>
        </div>
        </>
    )
}