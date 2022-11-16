import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { Plant, PlantTypesEnum } from "../types/plant";
import { useForm, SubmitHandler } from "react-hook-form";
import { findCategory, plantNames, plantsInfo } from "../assets/plantsInfo";
import CameraCapture from "../components/CameraCapture";
import Webcam from "react-webcam";
import { BsFillCameraFill } from "react-icons/bs";
import Title from "../components/Title";
// import { useRouter } from "next/router";

interface PlantWithId extends Plant {
  id: number;
}

const AddPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  //   const router = useRouter();

  const [showCamera, setShowCamera] = useState<boolean>(false);
  // const plant = trpc.plant.get.useQuery(Number(id));
  const addPlantMutation = trpc.plant.add.useMutation();

  interface IFormInput {
    name: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // TODO:
    // need to check if the name is in the db!

    // if not in db, throw error!

    // else
    await addPlant(data.name);
    router.push("/");
  };

  const addPlant = async (name: string) => {
    const selectedPlant = plantsInfo.filter((e) => e.name === name)[0];
    console.log(name, selectedPlant);

    if (selectedPlant) {
      const plant: Plant = {
        name: selectedPlant.name,
        image: selectedPlant.image,
        waterFrequencyDescription: selectedPlant.waterFrequencyDescription,
        waterIntervalDays: selectedPlant.waterIntervalDays,
        sunlight: 5,
        description: selectedPlant.description,
        lastWaterDate: new Date(),
        category: findCategory(selectedPlant.category),
      };

      const plantWithid: PlantWithId = await addPlantMutation.mutateAsync({
        plant,
      });
      return plantWithid;
    }
    // else, should not reach here
    // or plan not recognised

    // invalidatePlants();
    // setReceivedPlant(plantWithid);
  };

  return (
    <div className="space-y-4">
      <Title>Add Plant</Title>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-x-4">
        <select {...register("name")} className="select w-full max-w-xs">
          <option disabled selected>
            Pick your plant
          </option>
          {plantNames.map((e, i) => (
            <option key={i}>{e}</option>
          ))}
        </select>

        <button
          type="submit"
          className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
        >
          Add Plant
        </button>
       
      </form>

    </div>
  );
};

export default AddPage;
