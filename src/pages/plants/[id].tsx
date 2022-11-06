import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Link from "next/link";

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

  return (
    // place-content-center
    <>
      {!!plant.data && (
        <div className="place-content-center content-center justify-center">
          <Image
            src={plant.data.image}
            alt={plant.data.name}
            width={500}
            height={100}
          />
          <h1 className="text-xl">{plant.data.name}</h1>
          {/* <Image src={plant.data.image} alt={plant.data.name} width={80} height={100} /> */}
          <div className="stats bg-primary text-primary-content">
            <div className="stat">
              <div className="stat-title">Water frequency?</div>
              <div className="stat-value">
                {plant.data.waterFrequencyDescription}
              </div>
              <div className="stat-actions">
                <button className="btn-success btn-sm btn">Change Name</button>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Category</div>
              <div className="stat-value">{plant.data.category}</div>
              <div className="stat-actions">
                <button className="btn-sm btn">Withdrawal</button>
                <button className="btn-sm btn">deposit</button>
              </div>
            </div>
          </div>
          <></>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />

            <button
              type="submit"
              className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
              // onClick={() => updatePlant("test", )}
            >
              Update plant
            </button>
          </form>
          <button
            type="button"
            className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
            onClick={() => deletePlant(Number(id))}
          >
            Delete plant
          </button>
          <pre>{JSON.stringify(plant.data, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default PlantDetailPage;
