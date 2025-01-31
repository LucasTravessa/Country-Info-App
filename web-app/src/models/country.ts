import { z } from "zod";

export const countrySchema = z.object({
  countryCode: z.string(),
  name: z.string(),
});

export type ICountrySchema = z.infer<typeof countrySchema>;

export const getAllCountriesSchema = countrySchema.array();

export type IGetAllCountriesSchema = z.infer<typeof getAllCountriesSchema>;

export const borderSchema = z.object({
  commonName: z.string(),
  officialName: z.string(),
  countryCode: z.string(),
  region: z.string(),
  borders: z.array(z.string()).nullable(),
});

export const populationSchema = z.object({
  year: z.number(),
  value: z.number(),
});

export type IPopulationSchema = z.infer<typeof populationSchema>;

export const getCountrySchema = z.object({
  name: z.string(),
  borders: borderSchema.array(),
  population: populationSchema.array(),
  flag: z.string(),
});

export type IGetCountrySchema = z.infer<typeof getCountrySchema>;
