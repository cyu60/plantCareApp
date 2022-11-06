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
// import { useRouter } from "next/router";

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
    // need to check if the name is in the db!

    // if not in db, throw error!

    // else
    await addPlant(data.name);
    router.push("/");
    // need to inform the user that they added a plant?
  };

  //   const updatePlantMutation = trpc.plant.update.useMutation();
  // should take in a name
  const addPlant = async (name: string) => {
    const selectedPlant = plantsInfo.filter((e) => e.name === name)[0];
    console.log(name, selectedPlant);

    if (selectedPlant) {
      const plant: Plant = {
        name: selectedPlant.name,
        image: selectedPlant.image,
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
        waterFrequencyDescription: selectedPlant.waterFrequencyDescription,
        // "Every 1-2 weeks",
        waterIntervalDays: selectedPlant.waterIntervalDays,
        sunlight: 5,
        description: selectedPlant.description,
        lastWaterDate: new Date(),
        category: findCategory(selectedPlant.category),
      };

      const plantWithid = await addPlantMutation.mutateAsync({ plant });
    }
    // else, should not reach here
    // or plan not recognised

    // invalidatePlants();
    // setReceivedPlant(plantWithid);
  };

  return (
    <div className="space-y-4">
      <h1 className="pt-10 text-9xl">Add Plant</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-x-4">
        {/* <input {...register("name")} /> */}
        <select {...register("name")} className="select w-full max-w-xs">
          <option disabled selected>
            Pick your plant
          </option>
          {plantNames.map((e, i) => (
            <option key={i}>{e}</option>
          ))}
          {/* <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option> */}
        </select>

        <button
          type="submit"
          className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
          // onClick={() => updatePlant("test", )}
        >
          Add Plant
        </button>
        <button
          className="flex space-x-5 rounded-md bg-green-500 p-5 text-4xl text-white transition hover:bg-green-600"
          onClick={() => setShowCamera(!showCamera)}
        >
          <BsFillCameraFill></BsFillCameraFill>Use Camera
        </button>
        <Webcam height={720} screenshotFormat="image/jpeg" width={1280} />
        {!!showCamera && plantsInfo && (
          <>
            {/* <button className="flex space-x-5 rounded-md bg-orange-500 p-5 text-4xl text-white transition hover:bg-orange-600" onClick={() => addPlant(plantsInfo[2].name))}>
              Take a photo!
              </button> */}
              {/* <button>Take a photo!</button> */}
            </>
              )}
              {/* <button className="flex space-x-5 rounded-md bg-orange-500 p-5 text-4xl text-white transition hover:bg-orange-600" onClick={() => addPlant(plantsInfo[Math.round(Math.random() * plantsInfo.length)].name))}> */}
              </form>
              
              {/* <CameraCapture className="w-full h-screen"></CameraCapture> */}
              </div>
              
              //   type="submit"
    //   <div className="flex justify-between">
    //     <img src={plant.data?.image}></img>
    //     <h1 className="text-xl">{plant.data?.name}</h1>
    //     {/* <Image src={plant.data.image} alt={plant.data.name} width={80} height={100} /> */}
    //     <div className="stats bg-primary text-primary-content">
    //       <div className="stat">
    //         <div className="stat-title">Account balance</div>
    //         <div className="stat-value">$89,400</div>
    //         <div className="stat-actions">
    //           <button className="btn-success btn-sm btn">Add funds</button>
    //         </div>
    //       </div>

    //       <div className="stat">
    //         <div className="stat-title">Current balance</div>
    //         <div className="stat-value">$89,400</div>
    //         <div className="stat-actions">
    //           <button className="btn-sm btn">Withdrawal</button>
    //           <button className="btn-sm btn">deposit</button>
    //         </div>
    //       </div>
    //     </div>
    //     <pre>{JSON.stringify(plant.data, null, 2)}</pre>
    //   </div>
  );
};

export default AddPage;
