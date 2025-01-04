import { ITask } from "@/types/types";
import React from "react";

interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {
  return (
    <div className="bg-white w-full  border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4">
      {/* Task Title and Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Checkbox */}
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 border-gray-400 focus:ring focus:ring-blue-200"
          />
          {/* Task Title */}
          <span className="text-lg font-semibold text-gray-800">
            Task Title
          </span>
        </div>
        {/* Delete Button */}
        <button
          className="flex items-center justify-center h-8 w-8 text-gray-500 hover:text-red-600 transition-colors duration-200"
          aria-label="Delete Task"
        >
          🗑️
        </button>
      </div>

      {/* Task Description */}
      <div className="mt-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          This is a brief description of the task. It provides additional
          details or context to help the user understand the task better.
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
