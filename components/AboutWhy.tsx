import React from "react";

export default function AboutWhy() {
  const missions = [
    {
      title: "Kualitas Mobil Terjamin",
      text: "Memberikan Pelayanan Terbaik - Mengutamakan kepuasan pelanggan melalui layanan yang cepat, ramah, dan profesional.",
    },
    {
      title: "Harga Kompetitif & Transparan",
      text: "Memberikan Pelayanan Terbaik - Mengutamakan kepuasan pelanggan melalui layanan yang cepat, ramah, dan profesional.",
    },
    {
      title: "Proses Cepat & Mudah",
      text: "Membantu pelanggan dalam seluruh proses transaksi, mulai dari pengecekan kendaraan, negosiasi harga, hingga pengurusan dokumen.",
    },
    {
      title: "Pilihan Mobil Beragam",
      text: "Membantu pelanggan dalam seluruh proses transaksi, mulai dari pengecekan kendaraan, negosiasi harga, hingga pengurusan dokumen.",
    },
    {
      title: "Tukar Tambah & Kredit Fleksibel",
      text: "Menawarkan layanan tukar tambah kendaraan serta opsi kredit dengan berbagai pilihan tenor dan bunga ringan.",
    },
    {
      title: "Pelayanan Profesional & Ramah",
      text: "Tim Nusa Barong Motor siap membantu dengan pelayanan terbaik untuk memastikan pengalaman beli atau jual mobil yang memuaskan.",
    },
  ];

  return (
    <section className="h-full bg-white/80 text-black rounded-2xl px-[50px] pb-[35px]">
      <h1 className="font-bold italic text-4xl py-4 text-center">
        Kenapa Memilih Nusa Barong Motor?
      </h1>
      {missions.map((mission, index) => (
        <div key={index} className="flex">
          <div className="bg-black w-[30px] h-[30px] rounded-md flex-shrink-0 mt-2 me-2 text-white flex justify-center items-center text-[20px] font-bold">
            {index + 1}
          </div>
          <div className="mt-2 text-xl text-justify">
            <p className="font-normal">{mission.title}</p>
            <p className="font-light">{mission.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
