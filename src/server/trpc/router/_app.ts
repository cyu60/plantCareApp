import { router } from "../trpc";
import { plantRouter } from "./plantRouter";

export const appRouter = router({
  plant: plantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
