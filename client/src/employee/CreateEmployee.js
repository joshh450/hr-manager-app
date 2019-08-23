import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions/employee'
import BackButton from '../layout/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const CreateEmployee = ({ addEmployee }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        addEmployee({ id, name, email, phone })
        setId('')
        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <div className="employee-list">
            <BackButton />
            <div className="employee-list__container">
                <h2 className="employee-list__container__title">Create Employee</h2>
                <form className="employee-card" onSubmit={onSubmit}>
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><input name="name" value={name} onChange={e => setName(e.target.value)} className="input-field" type="text" placeholder="Full Name"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><input name="email" value={email} onChange={e => setEmail(e.target.value)} className="input-field" type="email" placeholder="Email Address"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><input name="phone" value={phone} onChange={e => setPhone(e.target.value)} className="input-field" type="text" placeholder="Phone Number"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><input name="id" value={id} onChange={e => setId(e.target.value)} className="input-field" type="text" placeholder="Employee ID"></input></div>
                    <div className="employee-field__buttons"><button className="button__edit">Create</button></div>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { addEmployee })(CreateEmployee);
