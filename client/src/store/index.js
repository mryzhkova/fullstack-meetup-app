import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import alertSliceReducer from '@/store/slices/alertSlice';
import authSliceReducer from '@/store/slices/authSlice';
import meetupSliceReducer from '@/store/slices/meetupSlice';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  meetupState: meetupSliceReducer,
  authState: authSliceReducer,
  alertState: alertSliceReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);

export default store;
