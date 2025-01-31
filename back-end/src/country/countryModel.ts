import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Country = z.infer<typeof CountrySchema>;
export const CountrySchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
});

// Input Validation for 'GET countries/:id' endpoint
export const GetCountrySchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
