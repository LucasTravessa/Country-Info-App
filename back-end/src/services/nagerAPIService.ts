import { logger } from '@/app';
import { ServiceResponse } from '@/common/models/serviceResponse';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

export class NagerAPIService {
  private DATE_NAGER_API = process.env.DATE_NAGER_API;

  // Retrieves available countries
  async getAvailableCountries(): Promise<ServiceResponse<any[] | null>> {
    try {
      const response = await axios.get(
        `${this.DATE_NAGER_API}/AvailableCountries`,
      );
      return ServiceResponse.success<string[]>(
        'Countries found',
        response.data,
      );
    } catch (ex) {
      const errorMessage = `Error fetching available countries: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while fetching available countries.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCountryBorders(
    countryCode: string,
  ): Promise<ServiceResponse<any | null>> {
    try {
      const bordersRes = await axios.get(
        `${this.DATE_NAGER_API}/CountryInfo/${countryCode}`,
      );
      const borders = bordersRes.data.borders || [];
      return ServiceResponse.success<any>('Country borders found', borders);
    } catch (ex) {
      const errorMessage = `Error fetching country borders for ${countryCode}: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while fetching country borders.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const nagerAPIService = new NagerAPIService();
