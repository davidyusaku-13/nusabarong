import GalleriesCard from "@/components/GalleriesCard";
import GalleriesPagination from "@/components/GalleriesPagination";
import GalleriesNavbar from "@/components/GalleriesNavbar";

export default function Galleries() {
  return (
    <>
      <div className="pt-[75px] min-h-[94vh] text-white bg-gradient-to-b from-[#4A4A4A] via-[#2C2C2C] to-[#1A1A1A] flex flex-col">
        <GalleriesNavbar />

        <div className="p-[30px] pt-0 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 place-items-center gap-4">
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

        <div className="mt-auto">
          <GalleriesPagination />
        </div>
      </div>
    </>
  );
}
