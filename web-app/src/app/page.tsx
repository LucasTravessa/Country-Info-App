import { api, HydrateClient } from "~/trpc/server";
import CountryList from "./_components/CountryList";

export const revalidate = 3600;

export default async function Home() {
  try {
    const countries = await api.country.getAll();

    return (
      <HydrateClient>
        <div>
          <h1 className="mb-6 text-3xl font-bold">Country List</h1>
          <CountryList countries={countries} />
        </div>
      </HydrateClient>
    );
  } catch (_) {
    return (
      <HydrateClient>
        <div>
          <h1 className="mb-6 text-3xl font-bold">Country List</h1>
          <p>Failed to fetch countries</p>
        </div>
      </HydrateClient>
    );
  }
}
