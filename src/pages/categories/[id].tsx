import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Link from "next/link";
import { plantsInfo } from "../../assets/plantsInfo";
import PlantDisplayCard from "../../components/PlantDisplayCard";
import PlantGrid from "../../components/PlantGrid";
import Title from "../../components/Title";

const CategoryDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const utils = trpc.useContext();

  // if (id !== "low" && id !== "mid" && id !== "high") {
  //   router.push("/");
  // }

  // const plants = trpc.plant.getAll.useQuery();

  // const invalidatePlant = () => utils.plant.get.invalidate();

  // interface IFormInput {
  //   name: string;
  // }

  // const { register, handleSubmit } = useForm<IFormInput>();
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   // console.log("test submission", plant.data?.id);
  //   updatePlant(data.name, Number(id));
  // };

  // // should take in a name
  // const updatePlantMutation = trpc.plant.update.useMutation();
  // const updatePlant = async (newPlantName: string, id: number) => {
  //   const updatedPlantWithId = await updatePlantMutation.mutateAsync({
  //     name: newPlantName,
  //     id,
  //   });
  //   invalidatePlant();
  //   return updatedPlantWithId;
  // };

  // const deletePlantMutation = trpc.plant.delete.useMutation();
  // const deletePlant = async (id: number) => {
  //   const deletedPlantWithId = await deletePlantMutation.mutateAsync(id);
  //   // invalidatePlants();
  //   router.push("/");
  //   return deletePlantMutation;
  // };

  // plantsInfo.filter()

  const getCategory = (id: string | string[] | undefined) => {
    switch (id) {
      case "high":
        return "High Maintenance";
      case "mid":
        return "Moderate Maintenance";
      case "low":
        return "Low Maintenance";
      default:
        return "NA";
    }
  };
  
  const plants = plantsInfo.filter((p) => p.category === getCategory(id));

  return (
    // place-content-center

    <>
      <div className="space-y-4">
        {!!id && <Title>{getCategory(id)}</Title>}
        <PlantGrid>
          {/* {!!plants.data && ( */}
          <>
            {plants.map((p) => (
              <PlantDisplayCard key={p.name} plant={p}></PlantDisplayCard>
            ))}
          </>
        </PlantGrid>
      </div>
      {/* )} */}
    </>
  );
};

export default CategoryDetailPage;
