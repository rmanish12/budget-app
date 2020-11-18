import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/actionTypes'

interface IAction {
    type: string,
    payload: any
}

interface IState {
    isAuthenticated: boolean,
    userId: number,
    firstName: string,
    role: string
}

const initialState = {
    isAuthenticated: false,
    userId: null,
    firstName: '',
    role: ''
}

export default function userReducer(state: IState = initialState, action: IAction) {
    switch(action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                role: action.payload.role
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loginError: action.payload.loginError
            }

        default:
            return state
    }
}