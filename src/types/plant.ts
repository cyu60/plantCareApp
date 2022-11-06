import { z } from 'zod';
import { PlantCategory } from '@prisma/client';

export const PlantTypesEnum = z.enum([PlantCategory.LOW_MAINTENANCE,PlantCategory.MID_MAINTENANCE, PlantCategory.HIGH_MAINTENANCE]);

const ZodPlant = z.object({
  name: z.string(),
  image: z.string(),
  waterFrequencyDescription: z.string(),
  waterIntervalDays: z.number(),
  sunlight: z.number(),
  description: z.string(),
  lastWaterDate: z.date(),
  category: PlantTypesEnum
});

export default ZodPlant;
export type Plant = z.infer<typeof ZodPlant>;
// export type PlantDisplay = z.infer<typeof ZodPlant>;