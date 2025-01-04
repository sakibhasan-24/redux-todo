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
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.task.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.task.filter;
};
export default taskSlices.reducer;
