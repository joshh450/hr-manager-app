import axios from 'axios';
import { GET_EMPLOYEES, EMPLOYEES_ERROR, DELETE_EMPLOYEE } from './types';

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
    try {
        const res = await axios.delete(`/api/employees/${id}`)

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