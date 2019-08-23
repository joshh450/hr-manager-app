import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = props => {
    return (
        <div className="back-button">
            <div className="back-button__container">
                <Link className="back-button__link" to="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <h3 className="back-button__text">Back</h3>
                </Link>
            </div>
        </div>
    )
}

export default BackButton
