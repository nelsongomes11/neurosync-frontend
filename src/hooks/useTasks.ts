import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.withCredentials = true;

export const useTasks = () => {
  const [tasks, setTasks] = useState<any>(null);
  const [tasksLoading, setTasksLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/tasks/");
        setTasks(res.data);
      } catch (err: any) {
        if (!err.response || err.response.status !== 401) {
          console.error(err);
        }
        setTasks(null);
      } finally {
        setTasksLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return { tasks, tasksLoading };
};
