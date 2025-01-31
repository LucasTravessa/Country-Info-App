import Image from "next/image";
import Link from "next/link";
import PopulationChart from "~/app/_components/PopulationChart";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api, HydrateClient } from "~/trpc/server";

export default async function CountryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const country = await api.country.getByID({ id });
    return (
      <HydrateClient>
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Image
                src={country.flag || "/placeholder.svg"}
                alt={`Flag of ${id}`}
                width={60}
                height={40}
                className="rounded"
              />
              <CardTitle className="text-3xl">{country.name}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Border Countries</CardTitle>
            </CardHeader>
            <CardContent>
              {country.borders && country.borders.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {country.borders.map((border, key) => (
                    <Link key={key} href={`/country/${border.countryCode}`}>
                      <Badge variant="secondary" className="cursor-pointer">
                        {border.commonName}
                      </Badge>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No bordering countries</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Population</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-3/5">
                <PopulationChart data={country.population} />
              </div>
            </CardContent>
          </Card>
        </div>
      </HydrateClient>
    );
  } catch (error) {
    return (
      <HydrateClient>
        <div>
          <h1 className="mb-6 text-3xl font-bold">Country Details</h1>
          <p>Failed to fetch country details</p>
        </div>
      </HydrateClient>
    );
  }
}
