import { z } from "zod";

export const country_schema = z.object({
  countryCode: z.string(),
  name: z.string(),
});

export type ICountry = z.infer<typeof country_schema>;
