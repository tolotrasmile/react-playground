import counterReducer from './counterReducer'
import combineReducers from 'redux/es/combineReducers'

export default combineReducers({ count: counterReducer })
