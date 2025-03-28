import GalleriesCard from "@/components/GalleriesCard";
import GalleriesNavbar from "@/components/GalleriesNavbar";

export default function Galleries() {
  return (
    <>
      <div className="pt-[75px] min-h-[94vh] text-white bg-gradient-to-b from-[#303030] via-[#1E1E1E] to-[#000000] flex flex-col">
        <GalleriesNavbar />

        <div className="p-[30px] pt-0 grid grid-cols-4 gap-4 ">
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

        {/* <div className="mt-auto">
          <GalleriesPagination />
        </div> */}
      </div>
    </>
  );
}
