import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/user'
import budgetReducer from './reducers/budget'
import budgetTypeReducer from './reducers/types'
import categoryReducer from './reducers/category'

const rootReducer = combineReducers({
    user: userReducer,
    budget: budgetReducer,
    type: budgetTypeReducer,
    category: categoryReducer
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store