import { api } from "~/lib/Api";
import { IGetAllCountriesSchema, IGetCountrySchema } from "~/models/country";
import { ServiceResponse } from "~/models/serviceResponse";

class CountryAPIService {
  async getAllCountries(): Promise<ServiceResponse<IGetAllCountriesSchema> | null> {
    try {
      const response =
        await api.get<ServiceResponse<IGetAllCountriesSchema>>("/countries");
      return response.data;
    } catch (error) {
      //! needs to be handled
      console.log("error: ", error);
      return null;
    }
  }

  async getCountry(
    id: string,
  ): Promise<ServiceResponse<IGetCountrySchema> | null> {
    try {
      const response = await api.get<ServiceResponse<IGetCountrySchema>>(
        `/countries/${id}`,
      );
      return response.data;
    } catch (error) {
      //! needs to be handled
      console.log("error: ", error);
      return null;
    }
  }
}

export const countryAPIService = new CountryAPIService();
