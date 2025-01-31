import PopulationChart from "~/app/_components/PopulationChart";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { HydrateClient } from "~/trpc/server";

export default async function CountryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <HydrateClient>
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            {/* <Image
            src={country.flags.svg || "/placeholder.svg"}
            alt={`Flag of ${country.name.common}`}
            width={60}
            height={40}
            className="rounded"
          /> */}
            <CardTitle className="text-3xl">{id}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Border Countries</CardTitle>
          </CardHeader>
          <CardContent>
            {/* {country.borders && country.borders.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {country.borders.map((border) => (
                <Link key={border} href={`/country/${border}`}>
                  <Badge variant="secondary" className="cursor-pointer">
                    {border}
                  </Badge>
                </Link>
              ))}
            </div>
          ) : (
            <p>No bordering countries</p>
          )} */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Population</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <p className="text-2xl font-semibold">
            {country.population.toLocaleString()}
          </p> */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Population Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <PopulationChart countryName={id} />
          </CardContent>
        </Card>
      </div>
    </HydrateClient>
  );
}
