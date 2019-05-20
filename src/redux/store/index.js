import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducers';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['generatedNumber'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const middleware = [logger, thunk];
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
