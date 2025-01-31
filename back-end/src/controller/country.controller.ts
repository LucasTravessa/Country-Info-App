import {
  getAvailableCountries,
  getCountryInfo,
} from '../services/country.service';

export const getAvailableCountriesController = async (req, res) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};
export const getIndividualCountry = async (req, res) => {
  try {
    const { countryCode } = req.params;
    const countryInfo = await getCountryInfo(countryCode.toUpperCase());
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
};
