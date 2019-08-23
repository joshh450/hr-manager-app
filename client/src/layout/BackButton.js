import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = props => {
    return (
        <div className="new-button">
            <div className="new-button__container">
                <Link className="new-button__link" to="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <h3 className="new-button__text">Back</h3>
                </Link>
            </div>
        </div>
    )
}

export default BackButton
