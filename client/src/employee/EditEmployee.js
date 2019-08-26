import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getEmployee, editEmployee } from '../actions/employee'
import BackButton from '../layout/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const EditEmployee = ({ getEmployee, editEmployee, employee: { employee, loading }, match }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        getEmployee(match.params.id)

        setFormData({
        id: loading || !employee.id ? '' : employee.id,
        name: loading || !employee.name ? '' : employee.name,
        email: loading || !employee.email ? '' : employee.email,
        phone: loading || !employee.phone ? '' : employee.phone,
    })
    }, [match.params.id])

    const {
        id,
        name,
        email,
        phone
    } = formData;

    const docId = employee._id

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        editEmployee(docId, formData)
    }

    return (
        loading ? <h2 className="loading">Loading...</h2> :
        <div className="employee-list">
            <BackButton />
            <div className="employee-list__container">
                <h2 className="employee-list__container__title">Employee</h2>
                <form className="employee-card" onSubmit={onSubmit}>
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><input name="name" value={name} onChange={onChange} className="input-field" type="text" placeholder="Full Name"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><input name="email" value={email} onChange={onChange} className="input-field" type="email" placeholder="Email Address"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><input name="phone" value={phone} onChange={onChange} className="input-field" type="text" placeholder="Phone Number"></input></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><input name="id" value={id} onChange={onChange} className="input-field" type="text" placeholder="Employee ID"></input></div>
                    <div className="employee-field__buttons"><button className="button__edit" type="submit">Submit</button></div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    employee: state.employee
})

export default connect(mapStateToProps, { getEmployee, editEmployee })(EditEmployee);
