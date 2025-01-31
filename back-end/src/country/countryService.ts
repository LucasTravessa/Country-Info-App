import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/app';
import { nagerAPIService } from '@/services/nagerAPIService';
import { countriesNowAPIService } from '@/services/countriesNowAPIService';

export class CountryService {
  // Retrieves all users from the database
  async findAll(): Promise<ServiceResponse<any[] | null>> {
    return nagerAPIService.getAvailableCountries();
  }

  // Retrieves a single user by their ID
  async findById(id: string): Promise<ServiceResponse<any | null>> {
    try {
      const borders = await nagerAPIService.getCountryBorders(id);
      const countryFlag = await countriesNowAPIService.getCountryFlag(id);
      const countryPopulation =
        await countriesNowAPIService.getCountryPopulation(
          countryFlag.responseObject.iso3,
        );
      if (
        !borders.success ||
        !countryPopulation.success ||
        !countryFlag.success
      ) {
        return ServiceResponse.failure(
          'Country not found',
          null,
          StatusCodes.NOT_FOUND,
        );
      }
      const responseObject = {
        name: countryFlag.responseObject.name,
        borders: borders.responseObject,
        population: countryPopulation.responseObject,
        flag: countryFlag.responseObject.flag,
      };
      return ServiceResponse.success<any>('Country found', responseObject);
    } catch (ex) {
      const errorMessage = `Error finding Country with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while finding Country.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const countryService = new CountryService();
