import { configureStore } from '@reduxjs/toolkit'
import counteReducer from './counterSlice.jsx'
import todoreducer from './todoSlice.jsx'
import loggerMiddleware from './loggerMiddleware.jsx';

export default configureStore({
    reducer: {
        counter: counteReducer,
        todos: todoreducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        loggerMiddleware
    ],
});
