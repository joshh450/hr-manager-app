import React from 'react'
import BackButton from '../layout/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const CreateEmployee = props => {
    return (
        <div className="employee-list">
            <BackButton />
            <div className="employee-list__container">
                <h2 className="employee-list__container__title">Create Employee</h2>
                <div className="employee-card">
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><input className="input-field" type="text" placeholder="Full Name"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><input className="input-field" type="email" placeholder="Email Address"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><input className="input-field" type="text" placeholder="Phone Number"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><input className="input-field" type="text" placeholder="Employee ID"></input></div>
                    <div className="employee-field__buttons"><button className="button__edit">Create</button></div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployee
