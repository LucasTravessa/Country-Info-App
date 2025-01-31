import { api, HydrateClient } from "~/trpc/server";
import CountryList from "./_components/CountryList";

export default async function Home() {
  const countries = await api.country.getAll();

  return (
    <HydrateClient>
      <div>
        <h1 className="mb-6 text-3xl font-bold">Country List</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CountryList countries={countries} />
        </div>
      </div>
    </HydrateClient>
  );
}
