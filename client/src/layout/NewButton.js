import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const NewButton = props => {
    return (
        <div className="new-button">
            <FontAwesomeIcon icon={faPlusCircle}/>
            <h3 className="new-button__text">New</h3>
        </div>
    )
}

export default NewButton
