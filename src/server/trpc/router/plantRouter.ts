import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import ZodPlant from "../../../types/plant";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const plantRouter = router({
  add: publicProcedure
    .input(
      z.object({
        plant: ZodPlant,
      })
    )
    .mutation(async ({ input }) => {
      const plant = await prisma.plant.create({
        data: input.plant,
      });

      return plant;
    }),
  get: publicProcedure.input(z.number()).query(async ({ input: id }) => {
    return await prisma.plant.findUnique({
      where: {
        id,
      },
    });
  }),
  getAll: publicProcedure.query(async () => {
    return await prisma.plant.findMany();
  }),
  // should allow the user to change name? create a nickname
  update: publicProcedure
    .input(z.object({ id: z.number(), name: z.string() }))
    .mutation(async ({ input }) => {
      //   update: publicProcedure.input(z.object(z.number(), z.string())).query(async({input: {id, name}}) => {
      return await prisma.plant.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ input: id }) => {
    return await prisma.plant.delete({
      where: { id },
    });
  }),
});
