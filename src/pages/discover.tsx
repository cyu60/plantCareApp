import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { Plant, PlantTypesEnum } from "../types/plant";
import { useForm, SubmitHandler } from "react-hook-form";
import CategoryCard from "../components/CategoryCard";
import Link from "next/link";
import Title from "../components/Title";
import PlantGrid from "../components/PlantGrid";
// import { useRouter } from "next/router";

const FindPlantPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  //   const router = useRouter();

  // const plant = trpc.plant.get.useQuery(Number(id));
  const addPlantMutation = trpc.plant.add.useMutation();

  interface IFormInput {
    name: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  //   const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //     // need to check if the name is in the db!

  //     // if not in db, throw error!

  //     // else
  //     addPlant(data.name);
  //     router.push("/");
  //   };

  //   const updatePlantMutation = trpc.plant.update.useMutation();
  // should take in a name
  //   const addPlant = async (name: string) => {
  //     const plant: Plant = {
  //       name: "Plant A",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  //       waterFrequencyDescription: "Every 1-2 weeks",
  //       waterIntervalDays: 10,
  //       sunlight: 5,
  //       description: "Cool plant",
  //       category: PlantTypesEnum.Enum.LOW_MAINTENANCE,
  //     };

  //     const plantWithid = await addPlantMutation.mutateAsync({ plant });
  //     // invalidatePlants();
  //     // setReceivedPlant(plantWithid);
  //   };

  // Categories should be retrieved from db!!
  const categories = [
    {
      url: "low",
      name: "Low Maintenance",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
    },
    {
      url: "mid",
      name: "Moderate Maintenance",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
    },
    {
      url: "high",
      name: "High Maintenance",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
    },
    // {
    //   name: "Blah 3",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
    // },
  ];
  return (
    <>
      <div className="space-y-4">
        <Title>Categories</Title>
        <PlantGrid>
          <>
          {categories.map((e) => (
            <Link key={e.name} href={"/categories/" + e.url}>
              <CategoryCard key={e.name} category={e}></CategoryCard>
            </Link>
          ))}
          </>
        </PlantGrid>
      </div>
    </>
  );
};

export default FindPlantPage;
