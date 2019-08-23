import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const NewButton = props => {
    return (
        <div className="new-button">
            <div className="new-button__container">
                <Link className="new-button__link" to="/create">
                    <FontAwesomeIcon icon={faPlusCircle}/>
                    <h3 className="new-button__text">New</h3>
                </Link>
            </div>
        </div>
    )
}

export default NewButton
