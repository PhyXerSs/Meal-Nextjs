import { configureStore } from '@reduxjs/toolkit'
import NatonalReducer from './NationalSelect'
import MealIdReducer from './MealIdSelect'
import CategoryReducer from './CategorySelect'
const store = configureStore({
  reducer: {
      Category: CategoryReducer,
      National: NatonalReducer,
      MealId: MealIdReducer,
  },

})

export default store;

export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch