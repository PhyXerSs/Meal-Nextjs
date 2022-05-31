import { configureStore } from '@reduxjs/toolkit'
import CatergoryReducer from './CategorySelect'

const store = configureStore({
  reducer: {
      Category: CatergoryReducer
  },

})

export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch