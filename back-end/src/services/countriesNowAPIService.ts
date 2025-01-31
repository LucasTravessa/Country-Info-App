import { logger } from '@/app';
import { ServiceResponse } from '@/common/models/serviceResponse';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

class CountriesNowAPIService {
  private COUNTRIES_NOW_API = process.env.COUNTRIES_NOW_API;

  // Retrieves country population by country code
  //! Take a look into this data
  async getCountryPopulation(
    countryCode: string,
  ): Promise<ServiceResponse<any | null>> {
    try {
      const populationRes = await axios.get(
        `${this.COUNTRIES_NOW_API}/population`,
      );
      const country = populationRes.data.data.find(
        (c: any) => c.iso3 === countryCode,
      );
      logger.info(`Country population found for ${country}`);
      const populationData = country.populationCounts || [];
      return ServiceResponse.success<any>(
        'Country population found',
        populationData,
      );
    } catch (ex) {
      const errorMessage = `Error fetching country population for ${countryCode}: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while fetching country population.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Retrieves country flag by country code
  async getCountryFlag(
    countryCode: string,
  ): Promise<ServiceResponse<any | null>> {
    try {
      const flagRes = await axios.get(`${this.COUNTRIES_NOW_API}/flag/images`);
      const country = flagRes.data.data.find(
        (c: any) => c.iso2 === countryCode,
      );
      const flagUrl = country.flag || '';
      return ServiceResponse.success<any>('Country flag found', flagUrl);
    } catch (ex) {
      const errorMessage = `Error fetching country flag for ${countryCode}: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while fetching country flag.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const countriesNowAPIService = new CountriesNowAPIService();
