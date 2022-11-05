import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";

import { trpc } from "../utils/trpc";

import type { Plant } from "../types/plant";
import { PlantTypesEnum } from "../types/plant";

interface PlantWithId extends Plant {
  id: number;
}

const Home: NextPage = () => {
  const [receivedPlant, setReceivedPlant] = useState<PlantWithId | null>(null);
  const newName = useRef();
  const addPlantMutation = trpc.plant.add.useMutation();
  const storedPlant = trpc.plant.get.useQuery(1);
  const allPlants = trpc.plant.getAll.useQuery();
  const updatePlantMutation = trpc.plant.update.useMutation();
  const deletePlantMutation = trpc.plant.delete.useMutation();

  // should take in a name
  const updatePlant = async (newPlantName: string, id: number) => {
    const updatedPlantWithId = await updatePlantMutation.mutateAsync({
      name: newPlantName,
      id,
    });
    return updatedPlantWithId;
  };
  const deletePlant = async (id: number) => {
    const deletedPlantWithId = await deletePlantMutation.mutateAsync(id);
    return deletePlantMutation;
  };

  const addPlant = async () => {
    const plant: Plant = {
      name: "Plant A",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
      waterFrequencyDescription: "Every 1-2 weeks",
      waterIntervalDays: 10,
      sunlight: 5,
      description: "Cool plant",
      category: PlantTypesEnum.Enum.LOW_MAINTENANCE,
    };

    const plantWithid = await addPlantMutation.mutateAsync({ plant });

    setReceivedPlant(plantWithid);
  };

  // should have some sort of useEffect hook? detect change in all plans?

  return (
    <>
      <Head>
        <title>Plan app</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto my-12 max-w-3xl">
        <div className="flex justify-between">
          <h2 className="text-2x1 font-semibold">My plant list</h2>
          <button
            type="button"
            className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
            onClick={() => addPlant()}
          >
            Add Plant
          </button>
        </div>
        {/* <input type="text"></input> */}
        <input
          type="text"
          placeholder="Type here"
          ref={newName}
          className="input w-full max-w-xs"
        />
        {/* <input type="text" ref={newName}></input> */}
        {!!allPlants &&
          allPlants.data?.map((e) => (
            <>
              <Link href={"/plants/" + e.id}>
                <pre>{JSON.stringify(e, null, 2)}</pre>
              </Link>
              <button
                type="button"
                className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
                onClick={() => deletePlant(e.id)}
              >
                Delete plant
              </button>
              <button
                type="button"
                className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
                onClick={() => updatePlant("This is cool", e.id)}
              >
                Update plant
              </button>
            </>
          ))}
        {/* {!!allPlants && <pre>{JSON.stringify(allPlants, null, 2)}</pre>} */}
        {/* {!!storedPlant && <pre>{JSON.stringify(storedPlant, null, 2)}</pre>}
        {!!receivedPlant && <pre>{JSON.stringify(receivedPlant, null, 2)}</pre>} */}

        {/* <h2 className="text-2x1 font-semibold">All </h2> */}
      </main>
    </>
  );
};

export default Home;