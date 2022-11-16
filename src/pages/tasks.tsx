import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import TaskCard from "../components/TaskCard";
import Title from "../components/Title";

const TaskPage: NextPage = () => {

  const plants = trpc.plant.getAll.useQuery();

  return (
    <>
    <div className="space-y-4 place-content-center">

    <Title>Plants to water</Title>

      {!!plants &&
        plants.data?.map((e) => <TaskCard key={e.id} plant={e}></TaskCard>)}
        </div>
    </>
  );
};

export default TaskPage;
