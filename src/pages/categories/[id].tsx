import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { plantsInfo } from "../../assets/plantsInfo";
import PlantDisplayCard from "../../components/PlantDisplayCard";
import PlantGrid from "../../components/PlantGrid";
import Title from "../../components/Title";

const CategoryDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
    <>
      <div className="space-y-4">
        {!!id && <Title>{getCategory(id)}</Title>}
        <PlantGrid>
          <>
            {plants.map((p) => (
              <PlantDisplayCard key={p.name} plant={p}></PlantDisplayCard>
            ))}
          </>
        </PlantGrid>
      </div>
    </>
  );
};

export default CategoryDetailPage;
