import { ITask } from "@/types/types";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  // Function to determine priority styles
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white w-full border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4">
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
            {task?.title}
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
          {task?.description}
        </p>
      </div>

      {/* Task Priority */}
      <div className="mt-3">
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${getPriorityClass(
            task.priority
          )}`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}{" "}
          Priority
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
