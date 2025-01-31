import Link from "next/link";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { ICountry } from "~/models/country";

export default function CountryListItem({
  countryCode,
  name,
}: ICountry): React.ReactElement {
  return (
    <Card className="hover:bg-accent transition-colors">
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
