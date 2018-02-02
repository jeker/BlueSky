import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducers/rootReudcer';

// let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// let store = createStoreWithMiddleware(rootReducer);
// export default store;

import getReducers from '../reducers/rootReudcer';

export default function getStore(navReducer) {
    const middlewares = [thunk.withExtraArgument()];
    const middleware = applyMiddleware(...middlewares);

    return createStore(
        getReducers(navReducer),
        undefined,
        middleware
    );
}
