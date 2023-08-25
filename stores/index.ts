// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ** Reducers
import todoReducer from '../stores/app/todoSlice'

import todoSlice from '../stores/app/todoSlice';


const rootReducer = combineReducers({
  todo: todoReducer
})

// Configure Redux Persist
const persistConfig = {
  key: 'root', // Change this key to suit your application
  storage: AsyncStorage,
};

// Create a pers
const persistedReducer = persistReducer(persistConfig, todoSlice);



const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: true
});



// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import todoReducer, { updateInitialValue } from '../stores/app/todoSlice'; // Import your actions from todoSlice

// const rootReducer = combineReducers({
//   todo: todoReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   devTools: true,
// });

// const persistor = persistStore(store);

// // Load initial value and update the initial state once resolved
// (async () => {
//   const initialTodoList = await getInitialTodo();
//   store.dispatch(updateInitialValue(initialTodoList));
// })();

// export { store, persistor };
