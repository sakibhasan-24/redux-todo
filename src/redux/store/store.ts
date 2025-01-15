import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import { productsApi } from "../api/apiSlice";
const store = configureStore({
  reducer: {
    task: taskReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
