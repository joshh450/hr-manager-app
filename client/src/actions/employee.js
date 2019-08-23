import axios from 'axios';
import { GET_EMPLOYEES, EMPLOYEES_ERROR, DELETE_EMPLOYEE, ADD_EMPLOYEE } from './types';

export const getEmployees = () => async dispatch => {
    try {
        const res = await axios.get('/api/employees')

        dispatch({
            type: GET_EMPLOYEES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: EMPLOYEES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const deleteEmployee = id => async dispatch => {
    if(window.confirm('Are you sure? This action cannot be undone!')) {
        try {
            await axios.delete(`/api/employees/${id}`)

            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            })
        } catch (err) {
            dispatch({
                type: EMPLOYEES_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

export const addEmployee = formData => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    try {
        const res = await axios.post(`/api/employees/`, formData, config)

        dispatch({
            type: ADD_EMPLOYEE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: EMPLOYEES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}