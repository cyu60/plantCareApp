import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Title from "../../components/Title";
import CountDown from "../../components/CountDown";
import { getDisplayCategory } from "../../utils/helper";
import NicknameForm, {
  NicknameFormCollapse,
} from "../../components/forms/NicknameForm";

const PlantDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const utils = trpc.useContext();

  const plant = trpc.plant.get.useQuery(Number(id));

  const invalidatePlant = () => utils.plant.get.invalidate();

  const deletePlantMutation = trpc.plant.delete.useMutation();
  const deletePlant = async (id: number) => {
    const deletedPlantWithId = await deletePlantMutation.mutateAsync(id);
    router.push("/");
    return deletedPlantWithId;
  };

  return (
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
            <NicknameFormCollapse>
              <NicknameForm
                id={plant.data.id}
                invalidatePlant={invalidatePlant}
              ></NicknameForm>
            </NicknameFormCollapse>
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Water frequency?</div>
                <div className="stat-value text-2xl lg:text-4xl">
                  {plant.data.waterFrequencyDescription}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Category</div>
                <div className="stat-value text-2xl lg:text-4xl">
                  {getDisplayCategory(plant.data.category)}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Sunlight</div>
                <div className="stat-value text-2xl lg:text-4xl">
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
          </div>
        </div>
      )}
    </>
  );
};

export default PlantDetailPage;
