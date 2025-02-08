import GalleriesCard from "@/components/GalleriesCard";
import GalleriesPagination from "@/components/GalleriesPagination";
import GalleriesNavbar from "@/components/GalleriesNavbar";

export default function Galleries() {
  return (
    <>
      <div className="text-white bg-gradient-to-b from-[#4A4A4A] via-[#2C2C2C] to-[#1A1A1A]">
        {/* NAVBAR */}
        <GalleriesNavbar />

        {/* CONTENT/GALLERIES */}
        <div className="p-[30px] grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
          <GalleriesCard />
        </div>

        {/* PAGINATION */}
        <GalleriesPagination />
      </div>
    </>
  );
}
