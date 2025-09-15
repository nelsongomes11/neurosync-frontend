import { Calendar } from "@/components/ui/calendar";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "@/hooks/useTasks";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  tag: string | null;
  completed: boolean;
  reminder_sent: boolean;
}

const DashboardPage = () => {
  const { user, loading, logout } = useAuth();
  const { tasks, tasksLoading } = useTasks();
  // Calendar

  const [date, setDate] = useState(new Date());

  const tasksForDate = tasks?.filter((task: Task) => {
    const taskDate = new Date(task.due_date).toDateString();
    const selectedDate = date.toDateString();
    return taskDate === selectedDate;
  });

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center bg-zinc-800">
        <p className="text-white text-md font-[Pirulen]">Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-zinc-800">
        <div className="flex flex-col items-center">
          <p className="text-white text-5xl font-[Pirulen]">Dashboard</p>
          <p className="text-white text-lg font-[clash] mt-5">
            Welcome, {user.username}
          </p>
          <div className="flex items-start justify-center p-4 gap-8 mt-6">
            {/*Calendar Display*/}
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
              required
            />

            {/* Selected Date Display */}
            <div className="flex flex-col justify-center">
              <h3 className="text-slate-200 text-md font-[clash] ">Tasks</h3>
              <p className="text-white text-xl font-[clash] mt-2">
                {date.toLocaleDateString("default", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div className="mt-4 w-full overflow-x-auto">
                <table className="min-w-full border border-zinc-900 rounded-lg divide-y divide-zinc-900">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="px-4 py-2 text-center text-sm font-semibold text-white w-70">
                        Title
                      </th>
                      <th className="px-4 py-2 text-center text-sm font-semibold text-white w-30">
                        Tag
                      </th>
                      <th className="px-4 py-2 text-center text-sm font-semibold text-white w-30">
                        Completed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-800 divide-y divide-zinc-600">
                    {tasksLoading ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-2 text-center text-slate-400 italic animate-pulse"
                        >
                          Loading tasks...
                        </td>
                      </tr>
                    ) : tasksForDate.length > 0 ? (
                      tasksForDate.map((task: Task) => (
                        <tr
                          key={task.id}
                          className="hover:bg-zinc-700 transition-colors"
                        >
                          <td className="px-4 py-2 text-white text-center">
                            {task.title}
                          </td>
                          <td className="px-4 py-2 text-white text-center">
                            {task.tag || "-"}
                          </td>
                          <td className="px-4 py-2 text-white text-center">
                            {task.completed ? "✅" : "❌"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-2 text-center text-slate-400 italic"
                        >
                          No tasks for this date
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <button
            className="text-white border-2 border-white rounded-sm p-1 px-3 mt-10"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
