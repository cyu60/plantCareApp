import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Link from "next/link";
import Title from "../../components/Title";
import CountDown from "../../components/CountDown";

const PlantDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const utils = trpc.useContext();

  const plant = trpc.plant.get.useQuery(Number(id));

  const invalidatePlant = () => utils.plant.get.invalidate();

  interface IFormInput {
    name: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log("test submission", plant.data?.id);
    updatePlant(data.name, Number(id));
  };

  // should take in a name
  const updatePlantMutation = trpc.plant.update.useMutation();
  const updatePlant = async (newPlantName: string, id: number) => {
    const updatedPlantWithId = await updatePlantMutation.mutateAsync({
      name: newPlantName,
      id,
    });
    invalidatePlant();
    return updatedPlantWithId;
  };

  const deletePlantMutation = trpc.plant.delete.useMutation();
  const deletePlant = async (id: number) => {
    const deletedPlantWithId = await deletePlantMutation.mutateAsync(id);
    // invalidatePlants();
    router.push("/");
    return deletePlantMutation;
  };

  const getCategory = (category: string) => {
    switch (category) {
      case "LOW_MAINTENANCE":
        return "Low Maintenance";
      case "MID_MAINTENANCE":
        return "Moderate Maintenance";
      case "HIGH_MAINTENANCE":
        return "High Maintenance";
      default:
        return null;
    }
  };
  
  return (
    // place-content-center
    <>
      {!!plant.data && (
        <div className="place-content-center content-center justify-center">
          <Image
            className="h-48 w-full object-cover"
            src={plant.data.image}
            alt={plant.data.name}
            width={500}
            height={100}
          />
          <div className="space-y-4">
            <Title>{plant.data.name}</Title>
            <form className="space-x-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input-bordered input-primary input w-full max-w-xs"
                {...register("name")}
              />

              <button
                type="submit"
                className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
                // onClick={() => updatePlant("test", )}
              >
                Create Nickname
              </button>
            </form>
            {/* <Image src={plant.data.image} alt={plant.data.name} width={80} height={100} /> */}
            <div className="stats">
              <div className="stat">
                <div className="stat-title">Water frequency?</div>
                <div className="stat-value">
                  {plant.data.waterFrequencyDescription}
                </div>
                {/* <div className="stat-actions">
                <button className="btn-success btn-sm btn">Change Name</button>
              </div> */}
              </div>

              <div className="stat">
                <div className="stat-title">Category</div>
                <div className="stat-value">
                  {getCategory(plant.data.category)}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Sunlight</div>
                <div className="stat-value">
                  {plant.data.sunlight + " hrs/day"}{" "}
                </div>
              </div>
            </div>
            <h1 className="text-4xl"> Time since you have last watered me:</h1>
            <CountDown lastWaterTime={plant.data.lastWaterDate}></CountDown>
            <h1 className="text-4xl"> Description:</h1>
            <h1 className="text-3xl">{plant.data.description}</h1>
            <div className="space-y-4">
              <button
                type="button"
                className="rounded-md bg-red-500 p-2 text-sm text-white transition hover:bg-red-600"
                onClick={() => deletePlant(Number(id))}
              >
                Delete plant
              </button>
            </div>
            {/* <pre>{JSON.stringify(plant.data, null, 2)}</pre> */}
          </div>
        </div>
      )}
    </>
  );
};

export default PlantDetailPage;
