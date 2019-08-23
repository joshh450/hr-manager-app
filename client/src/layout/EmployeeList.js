import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getEmployees from '../actions/employee'
import Employee from '../employee/Employee'
import NewButton from '../layout/NewButton';

const EmployeeList = ({ getEmployees, employee: { employees, loading } }) => {
    useEffect(() => {
        getEmployees();
    }, [getEmployees])

    return (
        loading ? <h2 className="loading">Loading...</h2> :
        <div className="employee-list">
            <NewButton />
            <div className="employee-list__container">
                <h2 className="employee-list__container__title">Employee List</h2>
                {employees.map(employee => (
                    <Employee key={employee._id} employee={employee} />
                ))}
            </div>
        </div>
    )
}

EmployeeList.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    employee: state.employee
})

export default connect(mapStateToProps, { getEmployees })(EmployeeList);
