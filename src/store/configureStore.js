import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
	return createStore(
		rootReducer,
		undefined,
		applyMiddleware(thunk)
	);
}
