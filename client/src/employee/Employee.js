import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const Employee = ({ employee: { _id, id, first, last, email, phone, date } }) => 
    <div className="employee-card">
        <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">{first} {last}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">{email}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">{phone}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">{id}</h2></div>
        <div className="employee-field__buttons"><Link to={`/edit/${_id}`}><button className="button__edit">Edit</button></Link></div>
        <div className="employee-field__time">Began working here <Moment format='MM/DD/YYYY'>{date}</Moment></div>
    </div>

Employee.propTypes = {
    employee: PropTypes.object.isRequired,
}

export default connect(null, {})(Employee)
