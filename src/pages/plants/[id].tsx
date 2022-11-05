import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import { trpc } from "../../utils/trpc";

const PlantDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const plant = trpc.plant.get.useQuery(Number(id));

  return <pre>{JSON.stringify(plant.data, null, 2)}</pre>
}

export default PlantDetailPage;