import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";

import { trpc } from "../utils/trpc";

import type { Plant } from "../types/plant";
import { PlantTypesEnum } from "../types/plant";
import { useForm, SubmitHandler } from "react-hook-form";
import PlantCard from "../components/PlantCard";
import { router } from "../server/trpc/trpc";
import { useRouter } from "next/router";
import PlantGrid from "../components/PlantGrid";
import Title from "../components/Title";

const Home: NextPage = () => {
  const allPlants = trpc.plant.getAll.useQuery();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Plant care app</title>
        <meta name="HowsItGrowing" content="A web app to help you track your plants" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className=" justify-between space-y-4">
          <Title>My plant list</Title>

          <button
            type="button"
            className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
            onClick={() => router.push("/add")}
          >
            Add Plant
          </button>
          <PlantGrid>
            <>
              {!!allPlants &&
                allPlants.data?.map((e) => (
                    <Link href={"/plants/" + e.id} key={e.id}>
                      <PlantCard plant={e}></PlantCard>
                    </Link>
                ))}
            </>
          </PlantGrid>
        </div>
      </main>
    </>
  );
};

export default Home;
