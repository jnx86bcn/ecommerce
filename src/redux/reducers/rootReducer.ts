import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reducers } from '../reducers/actionsReducers';

const devMode = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  collapsed: true
});

const middlewares = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
  reducers
});

export function initStore() {
  const middles = devMode != true ? {} : middlewares;

  return createStore(rootReducer, middles);
}
