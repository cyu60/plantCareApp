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
