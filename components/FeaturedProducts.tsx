"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client"; // Ensure this file is set up
import FeaturedProductsCard from "./FeaturedProductsCard";

// Define TypeScript interface for the data structure
interface FeaturedCar {
  id: number;
  picture: string;
  title: string;
  description: string;
}

export default function FeaturedProducts() {
  // Explicitly define the type for useState
  const [cars, setCars] = useState<FeaturedCar[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("featured-cars").select("*"); // No generics here

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setCars(data as FeaturedCar[]); // Explicit type assertion
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-black to-[#2C2C2C] text-white flex flex-col w-full min-h-[94vh] pb-8">
      <div className="my-24 text-center">
        <p className="uppercase lg:text-[64px] md:text-[42px] text-3xl font-extrabold">
          Rekomendasi Terbaik untuk Anda!
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-row xl:justify-center flex-col justify-start items-center gap-8">
        {cars.length > 0 ? (
          cars.map((car) => (
            <FeaturedProductsCard
              key={car.id}
              picture={car.picture}
              title={car.title}
              description={car.description}
            />
          ))
        ) : (
          <p className="text-gray-400">Loading or No Data Available...</p>
        )}
      </div>
    </div>
  );
}
