import { RootState } from "@/redux/store/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "low" | "medium";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};
const taskSlices = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuid();
      const isCompleted = false;
      const taskData = {
        ...action.payload,
        id,
        isCompleted,
      };
      state.tasks.push(taskData);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.task.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.task.filter;
};
export const { addTask } = taskSlices.actions;
export default taskSlices.reducer;
