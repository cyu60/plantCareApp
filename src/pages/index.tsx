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
  const utils = trpc.useContext();
  const router = useRouter();

  interface IFormInput {
    name: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  // const onSubmit: SubmitHandler<IFormInput> = (data) => data.name;

  // need to add some information -- on success invalidate getAll query
  const invalidatePlants = () => utils.plant.getAll.invalidate();

  // should take in a name
  const updatePlant = async (newPlantName: string, id: number) => {
    const updatedPlantWithId = await updatePlantMutation.mutateAsync({
      name: newPlantName,
      id,
    });
    invalidatePlants();
    return updatedPlantWithId;
  };
  const deletePlant = async (id: number) => {
    const deletedPlantWithId = await deletePlantMutation.mutateAsync(id);
    invalidatePlants();
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
      lastWaterDate: new Date(),
      category: PlantTypesEnum.Enum.LOW_MAINTENANCE,
    };

    const plantWithid = await addPlantMutation.mutateAsync({ plant });
    invalidatePlants();
    setReceivedPlant(plantWithid);
  };

  // should have some sort of useEffect hook? detect change in all plans?

  return (
    <>
      <Head>
        <title>Plant app</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* mx-auto my-12 max-w-3xl */}
        <div className=" justify-between space-y-4">
          <Title>My plant list</Title>

          {/* <h2 className=" font-semibold">My plant list</h2> */}
          <button
            type="button"
            className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
            onClick={() => router.push("/add")}
            // onClick={() => addPlant()}
          >
            Add Plant
          </button>

          {/* <input type="text"></input> */}
          {/* <input
          type="text"
          placeholder="Type here"
          ref={newName}
          className="input w-full max-w-xs"
        /> */}
          {/* <label>Nickname</label>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="input w-full max-w-xs" {...register("name")} /> */}

          {/* <input type="text" ref={newName}></input> */}
          {/* <div className="grid grid-cols-4 gap-4"> */}
          <PlantGrid>
            <>
              {!!allPlants &&
                allPlants.data?.map((e) => (
                  <>
                    <Link href={"/plants/" + e.id}>
                      <PlantCard plant={e}></PlantCard>
                    </Link>

                    {/* <button
                    type="submit"
                    className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
                    onClick={() => updatePlant("test", e.id)}
                    >
                    Update plant
                  </button> */}
                    {/* <form onSubmit={handleSubmit(onSubmit)> */}
                    {/* <Link href={"/plants/" + e.id}>
                  <pre>{JSON.stringify(e, null, 2)}</pre>
                  </Link>
                  <input {...register("name")} />
                  
                */}
                    {/* // </form> */}
                    {/* <button
                  type="button"
                  className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
                  onClick={() => deletePlant(e.id)}
                  >
                  Delete plant
                </button> */}
                  </>
                ))}
            </>
          </PlantGrid>
          {/* </div> */}
        </div>
        {/* {!!allPlants && <pre>{JSON.stringify(allPlants, null, 2)}</pre>} */}
        {/* {!!storedPlant && <pre>{JSON.stringify(storedPlant, null, 2)}</pre>}
        {!!receivedPlant && <pre>{JSON.stringify(receivedPlant, null, 2)}</pre>} */}

        {/* <h2 className="text-2x1 font-semibold">All </h2> */}
        {/* </form> */}
      </main>
    </>
  );
};

export default Home;
