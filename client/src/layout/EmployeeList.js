import React from 'react'
import NewButton from '../layout/NewButton';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'

const EmployeeList = props => {
    return (
        <div className="employee-list">
            <NewButton />
            <div className="employee-list__container">
                <h2 className="employee-list__container__title">Employee List</h2>
                <div className="employee-card">
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">Aaron Donald</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">aaron99@gmail.com</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">999-999-9999</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">123456</h2></div>
                    <div className="employee-field__buttons"><Link to="/edit"><button className="button__edit">Edit</button></Link></div>
                    <div className="employee-field__time">Began working 10 months ago</div>
                </div>
                <div className="employee-card">
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">Ron Swanson</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">ron@youdontneedtoknow.com</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">123-456-7890</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">123459</h2></div>
                    <div className="employee-field__buttons"><Link to="/edit"><button className="button__edit">Edit</button></Link></div>
                    <div className="employee-field__time">Began working 6 months ago</div>
                </div>
                <div className="employee-card">
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">Michael Scott</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">mscott@dundermifflin.co</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">429-876-4597</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">123499</h2></div>
                    <div className="employee-field__buttons"><Link to="/edit"><button className="button__edit">Edit</button></Link></div>
                    <div className="employee-field__time">Began working 2 months ago</div>
                </div>
                <div className="employee-card">
                    <div className="employee-field"><FontAwesomeIcon icon={faUser} size="2x"/><h2 className="employee-field__h2">Joshua Hougaard</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faEnvelope} size="2x"/><h2 className="employee-field__h2">joshh450@yahoo.com</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faPhone} size="2x"/><h2 className="employee-field__h2">801-735-4774</h2></div>
                    <div className="employee-field"><FontAwesomeIcon icon={faIdCard} size="2x"/><h2 className="employee-field__h2">123872</h2></div>
                    <div className="employee-field__buttons"><Link to="/edit"><button className="button__edit">Edit</button></Link></div>
                    <div className="employee-field__time">Began working a year ago</div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList
