import { useAppSelector } from "@/hooks/hooks";
import TaskCard from "./TaskCard";
import { AddModal } from "./AddModal";
import { useGetProductsQuery } from "@/redux/api/apiSlice";

export default function Tasks() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  console.log(products);
  const tasks = useAppSelector((state) => state.task.tasks);
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <AddModal />
      <div className="w-full grid grid-cols-1   gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
