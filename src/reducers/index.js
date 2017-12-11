import { combineReducers } from 'redux';
import ReducerBooks from 'reducer_books';

const rootReducer = combineReducers({
  books: ReducerBooks
});

export default rootReducer;
