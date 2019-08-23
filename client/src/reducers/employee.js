import { GET_EMPLOYEES, EMPLOYEES_ERROR } from '../actions/types'

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
        case EMPLOYEES_ERROR:
            return {
            ...state,
            error: payload,
            loading: false
        }
        default: return state;
    }
}