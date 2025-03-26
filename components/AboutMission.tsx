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
    <section className="mx-4 bg-white/80 text-black rounded-2xl px-4 lg:px-6 pb-4 lg:pb-6">
      <h1 className="font-bold italic text-xl lg:text-3xl py-2 lg:py-4 text-center">
        Misi
      </h1>
      {missions.map((text, index) => (
        <div key={index} className="flex">
          <div className="bg-black w-6 h-6 rounded-md flex-shrink-0 mt-2 lg:mt-1 me-2 text-white flex justify-center items-center text-sm font-bold">
            {index + 1}
          </div>
          <p className="font-light text-lg lg:text-xl text-justify">{text}</p>
        </div>
      ))}
    </section>
  );
}
