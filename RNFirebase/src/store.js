import {createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import epic from './epics';

const epicMMiddleware =createEpicMiddleware(epic);

const middleware = [epicMMiddleware];

if (process.env.NODE_ENV !== 'development' ) {
    const logger = createLogger();
    middleware.push(logger);
}

export default () =>createStore(reducer, applyMiddleware(...middleware));
