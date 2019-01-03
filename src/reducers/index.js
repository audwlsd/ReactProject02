import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';  // 객체가 나옴.

const reducers = combineReducers({
    counter, ui
});

export default reducers;