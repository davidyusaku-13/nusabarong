"use client";
import React, { useEffect, useState } from "react";
import GalleriesCard from "@/components/GalleriesCard";
import GalleriesNavbar from "@/components/GalleriesNavbar";

// Define the interface for a gallery item
interface GalleryItem {
  id: number;
  name: string;
  year: number;
  color: string;
  mileage: number;
  transmission: string;
  fuel_type: string;
  image_url: string;
}

export default function Galleries() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/galleries");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Fetch failed");

        setGalleries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-[75px] min-h-[94vh] text-white bg-gradient-to-b from-[#303030] via-[#1E1E1E] to-[#000000] flex flex-col">
      <GalleriesNavbar />

      <div className="p-[30px] pt-0 grid grid-cols-4 gap-4">
        {loading ? (
          <p className="text-gray-400 text-center col-span-4">Loading...</p>
        ) : galleries.length > 0 ? (
          galleries.map((gallery) => (
            <GalleriesCard
              key={gallery.id}
              name={gallery.name}
              year={gallery.year}
              color={gallery.color}
              mileage={gallery.mileage}
              transmission={gallery.transmission}
              fuelType={gallery.fuel_type}
              imageUrl={gallery.image_url}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-4">
            No Data Available
          </p>
        )}
      </div>
    </div>
  );
}
