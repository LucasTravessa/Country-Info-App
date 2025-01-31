import { IGetAllCountriesSchema } from "~/models/country";
import CountryListItem from "./CountryListItem";

type ICountryListProps = {
  countries: IGetAllCountriesSchema;
};

export default function CountryList({
  countries,
}: ICountryListProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {countries.map((country) => (
        <CountryListItem key={country.countryCode} {...country} />
      ))}
    </div>
  );
}
