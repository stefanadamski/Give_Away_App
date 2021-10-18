import { configureStore } from '@reduxjs/toolkit'
import { reducer as reduxFormReducer } from 'redux-form';
import authReducer from "./auth";

const store = configureStore({
    reducer: { auth: authReducer, form: reduxFormReducer }
});

export default store;



