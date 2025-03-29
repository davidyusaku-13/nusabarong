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
    <div className="bg-white/80 text-black rounded-[20px] px-8 pt-2 pb-8 flex-grow">
      <h2 className="font-bold text-[50px] text-center italic">Misi</h2>
      <div className="space-y-4">
        {missions.map((mission, index) => (
          <div key={index} className="flex gap-x-2">
            <div className="flex-shrink-0 bg-black text-white rounded-md w-[30px] h-[30px] mt-1 flex items-center justify-center font-bold text-[20px]">
              {index + 1}
            </div>
            <p className="font-light text-[22px]">{mission}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
