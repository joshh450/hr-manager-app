import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Navbar = props => {
    return (
        <Fragment>
            <div className="header">
                <FontAwesomeIcon icon={faUsers} size="3x"/>
                <h1 className="header__title">HR Manager</h1>
            </div>
        </Fragment>
    )
}

export default Navbar
