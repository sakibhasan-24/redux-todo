import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface initialState {
  tasks: ITask[];
}
const initialState = {
  tasks: [
    {
      id: "task1",
      title: "Task 1",
      describtion: "Task 1 description description",
      dueDate: "2026",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "task2",
      title: "Task 2",
      describtion: "Task 1 description description",
      dueDate: "2026",
      isCompleted: false,
      priority: "High priority",
    },
  ],
};
const taskSlices = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlices.reducer;
