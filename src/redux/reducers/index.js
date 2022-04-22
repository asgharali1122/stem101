import { combineReducers } from 'redux'
import changeNumber from './updaown'
import dataHandle from './dataHandle'

const rootReducers = combineReducers ({
    changeNumber,
    dataHandle,
})
export default rootReducers;