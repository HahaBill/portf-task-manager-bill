import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";

import HomeHeader from "../components/HomePage/HomeHeader";
import HomeBody from "../components/HomePage/HomeBody";

import { GET_ALL_TASKS } from "./api/crud_task";
import { Task } from "../models/TaskModel";

export default function Home() {
  const { data: allTasks } = useQuery(GET_ALL_TASKS);
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskInfo = useMemo(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(
      (task) => task.status === "COMPLETED"
    ).length;
    const uncompletedTasks = tasks.filter(
      (task) => task.status === "IN_PROGRESS"
    ).length;
    const pendingTasks = totalTasks - completedTasks - uncompletedTasks;

    return { totalTasks, completedTasks, uncompletedTasks, pendingTasks };
  }, [tasks]);

  useEffect(() => {
    if (allTasks?.getAllTasks) {
      setTasks(allTasks.getAllTasks);
    }
  }, [allTasks]);

  return (
    <div className="flex flex-col space-y-8">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader
        numTasks={taskInfo.totalTasks}
        completedTasks={taskInfo.completedTasks}
        uncompletedTasks={taskInfo.uncompletedTasks}
        pendingTasks={taskInfo.pendingTasks}
      />
      <div className="text-3xl">Tasks</div>
      <HomeBody allTasks={tasks} />
    </div>
  );
}
