import Link from "next/link";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { ICountrySchema } from "~/models/country";

export default function CountryListItem({
  countryCode,
  name,
}: ICountrySchema): React.ReactElement {
  return (
    <Card className="transition-colors hover:bg-accent">
      <CardHeader>
        <CardTitle>
          <Link href={`/country/${countryCode}`} className="hover:underline">
            {name}
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
