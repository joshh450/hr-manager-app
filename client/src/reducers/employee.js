import { GET_EMPLOYEES, GET_EMPLOYEE, EMPLOYEES_ERROR, DELETE_EMPLOYEE, ADD_EMPLOYEE } from '../actions/types'

const initialState = {
    employees: [],
    employee: null,
    loading: true,
    error: {}
}

export default function(state=initialState, action) {
    const { type, payload } = action

    switch(type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: payload,
                loading: false
        }
        case GET_EMPLOYEE:
            return {
                ...state,
                employee: payload,
                loading: false
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, payload],
                loading: false
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== payload),
                loading: false
            }
        case EMPLOYEES_ERROR:
            return {
            ...state,
            error: payload,
            loading: false
        }
        default: return state;
    }
}