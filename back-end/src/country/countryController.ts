import type { Request, RequestHandler, Response } from 'express';

import { handleServiceResponse } from '@/common/utils/httpHandlers';
import { countryService } from './countryService';

class CountryController {
  public getCountries: RequestHandler = async (
    _req: Request,
    res: Response,
  ) => {
    const serviceResponse = await countryService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };

  public getCountry: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const serviceResponse = await countryService.findById(id);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const countryController = new CountryController();
