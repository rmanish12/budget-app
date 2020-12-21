import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../store/reducers/user'
import budgetReducer from '../store/reducers/budget'

const rootReducer = combineReducers({
    user: userReducer,
    budget: budgetReducer
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store