import { configureStore, combineReducers } from '@reduxjs/toolkit'
import filtersReducer from './filtersSlice'
import productsReducer from './productsSlice' // <-- import your products slice

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer, // <-- add products slice
})

export const store = configureStore({
  reducer: rootReducer,
})

export function setupStore(
  preloadedState?: Partial<ReturnType<typeof rootReducer>>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type TestStore = ReturnType<typeof setupStore>

