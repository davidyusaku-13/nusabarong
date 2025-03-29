import React from "react";

export default function AboutWhy() {
  const whys = [
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
    <section className="ms-2 bg-white/80 text-black rounded-[20px] px-8 pt-2 pb-8 h-full flex flex-col">
      <h2 className="font-bold text-[40px] text-center my-4 italic">
        Kenapa Memilih Nusa Barong Motor?
      </h2>
      <div className="space-y-4">
        {whys.map((mission, index) => (
          <div key={index} className="flex gap-x-2">
            <div className="flex-shrink-0 bg-black text-white rounded-md w-[30px] h-[30px] mt-1 flex items-center justify-center font-bold text-[20px]">
              {index + 1}
            </div>
            <div className="font-light text-lg lg:text-xl text-justify">
              <div>
                <h3 className="font-normal text-[22px]">{mission.title}</h3>
                <p className="font-light text-[22px]">{mission.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
