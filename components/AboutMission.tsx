import React from "react";

export default function AboutMission() {
  const missions = [
    "Menyediakan Mobil Berkualitas - Menyajikan pilihan mobil bekas yang telah melalui inspeksi ketat untuk memastikan kondisi prima dan layak jalan.",
    "Memberikan Pelayanan Terbaik - Mengutamakan kepuasan pelanggan melalui layanan yang cepat, ramah, dan profesional.",
    "Menjaga Transparansi & Kepercayaan - Menyediakan informasi kendaraan secara jujur, termasuk riwayat servis dan kondisi aktual.",
    "Harga Kompetitif & Bersahabat - Menawarkan harga yang adil dan kompetitif bagi pembeli maupun penjual.",
    "Kemudahan Transaksi - Mempermudah proses jual beli dengan layanan kredit, tukar tambah, dan legalitas dokumen yang aman.",
  ];

  return (
    <section className="bg-white/80 text-black rounded-2xl px-[50px] pb-[35px]">
      <h1 className="font-bold italic text-5xl py-2 text-center">Misi</h1>
      {missions.map((text, index) => (
        <div key={index} className="flex">
          <div className="bg-black w-[30px] h-[30px] rounded-md flex-shrink-0 mt-2 me-2 text-white flex justify-center items-center text-[20px] font-bold">
            {index + 1}
          </div>
          <p className="font-light text-[22px] text-justify">{text}</p>
        </div>
      ))}
    </section>
  );
}
