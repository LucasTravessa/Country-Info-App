import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { type Router } from 'express';
import { z } from 'zod';

import { createApiResponse } from '@/docs/openAPIResponseBuilders';
import { validateRequest } from '@/common/utils/httpHandlers';
import { CountrySchema, GetCountrySchema } from './countryModel';
import { countryController } from './countryController';

export const countryRegistry = new OpenAPIRegistry();
export const countryRouter: Router = express.Router();

countryRegistry.register('Country', CountrySchema);

countryRegistry.registerPath({
  method: 'get',
  path: '/countries',
  tags: ['Country'],
  responses: createApiResponse(z.array(CountrySchema), 'Success'),
});

countryRouter.get('/', countryController.getCountries);

countryRegistry.registerPath({
  method: 'get',
  path: '/countries/{id}',
  tags: ['Country'],
  request: { params: GetCountrySchema.shape.params },
  responses: createApiResponse(CountrySchema, 'Success'),
});

countryRouter.get(
  '/:id',
  validateRequest(GetCountrySchema),
  countryController.getCountry,
);
