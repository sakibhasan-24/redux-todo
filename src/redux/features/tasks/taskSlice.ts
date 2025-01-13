import { RootState } from "@/redux/store/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "low" | "medium";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "task1",
      title: "Task 1",
      description: "Task 1 description description",
      dueDate: "2026",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "task2",
      title: "Task 2",
      description: "Task 1 description description",
      dueDate: "2026",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};
const taskSlices = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
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
