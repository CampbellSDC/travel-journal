import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <>
            <nav className="nav-container">

                <span className="globe-icon"><FontAwesomeIcon icon={faEarthAmericas} /></span>
                <h4 className="header-title">my journey</h4>
            </nav>
        </>
    )
}