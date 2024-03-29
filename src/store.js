import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
    let store = createStore(
        rootReducer,
        applyMiddleware(thunk, sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
