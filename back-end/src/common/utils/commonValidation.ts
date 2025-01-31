import { z } from 'zod';

export const commonValidations = {
  id: z.string().refine((id) => id.length > 0, 'ID must be not empty'),
  // ... other common validations
};
