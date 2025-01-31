"use client";

import { useState, useEffect } from "react";

interface PopulationData {
  year: number;
  population: number;
}

export default function PopulationChart({
  countryName,
}: {
  countryName: string;
}) {
  const [data, setData] = useState<PopulationData[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For this example, we'll generate some mock data
    const mockData: PopulationData[] = [
      { year: 2010, population: Math.floor(Math.random() * 10000000) },
      { year: 2011, population: Math.floor(Math.random() * 10000000) },
      { year: 2012, population: Math.floor(Math.random() * 10000000) },
      { year: 2013, population: Math.floor(Math.random() * 10000000) },
      { year: 2014, population: Math.floor(Math.random() * 10000000) },
      { year: 2015, population: Math.floor(Math.random() * 10000000) },
      { year: 2016, population: Math.floor(Math.random() * 10000000) },
      { year: 2017, population: Math.floor(Math.random() * 10000000) },
      { year: 2018, population: Math.floor(Math.random() * 10000000) },
      { year: 2019, population: Math.floor(Math.random() * 10000000) },
      { year: 2020, population: Math.floor(Math.random() * 10000000) },
    ];

    setData(mockData);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.year} className="flex items-center">
          <span className="mr-2">{item.year}</span>
          <span>{item.population.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
