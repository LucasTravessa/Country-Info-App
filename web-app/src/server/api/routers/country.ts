import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { countryAPIService } from "~/services/CountryAPIService";

export const countriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await countryAPIService.getAllCountries();
    if (!response?.success)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: response?.message,
      });
    return response?.responseObject;
  }),
  getByID: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const response = await countryAPIService.getCountry(input.id);
      if (!response?.success)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: response?.message,
        });
      return response?.responseObject;
    }),
});
