import { applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'; // импорт для обхода устаревания createStore, т.к. рекомендуют использовать Redux Toolkit

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//файл для настройки Redux