import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reducers } from '../reducers/actionsReducers';

const devMode = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  collapsed: true
});

const middlewaresDev = applyMiddleware(thunk, logger);
const middlewaresPro = applyMiddleware(thunk);

const rootReducer = combineReducers({
  reducers
});

export function initStore() {
  const middlewares = devMode != true ? middlewaresPro : middlewaresDev;

  return createStore(rootReducer, middlewares);
}
