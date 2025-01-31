import { ICountry } from "~/models/country";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Mocked DB
const countries: ICountry[] = [
  {
    countryCode: "AD",
    name: "Andorra",
  },
  {
    countryCode: "AL",
    name: "Albania",
  },
  {
    countryCode: "AM",
    name: "Armenia",
  },
  {
    countryCode: "AR",
    name: "Argentina",
  },
  {
    countryCode: "AT",
    name: "Austria",
  },
];

export const countriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return countries;
  }),
});
