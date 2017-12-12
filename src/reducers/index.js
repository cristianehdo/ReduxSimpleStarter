import { combineReducers } from 'redux';
import ReducerBooks from './reducer_books';

// defining state
const rootReducer = combineReducers({
  books: ReducerBooks
});

export default rootReducer;
