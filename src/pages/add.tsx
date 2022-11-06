import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { Plant, PlantTypesEnum } from "../types/plant";
import { useForm, SubmitHandler } from "react-hook-form";
import { plantNames } from "../assets/plantsInfo";
// import { useRouter } from "next/router";

const AddPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  //   const router = useRouter();

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
  };

  //   const updatePlantMutation = trpc.plant.update.useMutation();
  // should take in a name
  const addPlant = async (name: string) => {
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
    // invalidatePlants();
    // setReceivedPlant(plantWithid);
  };

  return (
    <>
      <h1 className="text-9xl">Add Plant</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("name")} /> */}
        <select {...register("name")} className="select w-full max-w-xs">
          <option disabled selected>
            Pick your plant
          </option>
          {plantNames.map((e, i) => <option key={i}>{e}</option>)}
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
      </form>
    </>

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
