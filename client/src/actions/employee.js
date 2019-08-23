import axios from 'axios';
import { GET_EMPLOYEES, EMPLOYEES_ERROR } from './types';

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

export default getEmployees;