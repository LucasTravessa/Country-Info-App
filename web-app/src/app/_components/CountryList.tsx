import { ICountry } from "~/models/country";
import CountryListItem from "./CountryListItem";

type ICountryList = {
  countries: ICountry[];
};

export default function CountryList({
  countries,
}: ICountryList): React.ReactElement {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryListItem key={country.countryCode} {...country} />
      ))}
    </div>
  );
}
