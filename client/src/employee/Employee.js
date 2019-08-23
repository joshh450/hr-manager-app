import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteEmployee } from '../actions/employee'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const Employee = ({ deleteEmployee, employee: { _id, id, name, email, phone, date } }) => 
    <div className="employee-card">
        <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">{name}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">{email}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">{phone}</h2></div>
        <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">{id}</h2></div>
        <div className="employee-field__buttons"><Link to={`/edit/${_id}`}><button className="button__edit">Edit</button></Link><button onClick={e => deleteEmployee(_id)} className="button__delete">Delete</button></div>
        <div className="employee-field__time">Added <Moment className="moment" format='MM/DD/YYYY'>{date}</Moment></div>
    </div>

Employee.propTypes = {
    employee: PropTypes.object.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
}

export default connect(null, {deleteEmployee})(Employee)
