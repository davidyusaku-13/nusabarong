-- Create featured_cars table
CREATE TABLE IF NOT EXISTS public.featured_cars (
  id SERIAL PRIMARY KEY,
  picture TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Insert sample data into featured_cars
INSERT INTO public.featured_cars (id, picture, title, description, created_at) VALUES
(1, 'terios.jpg', 'Daihatsu Terios X AT', 'Daihatsu Terios X AT merupakan pilihan SUV tangguh dan nyaman dengan desain modern serta fitur lengkap. Ditenagai mesin 1.5L Dual VVT-i, mobil ini menawarkan performa responsif dan efisien, didukung transmisi otomatis untuk kenyamanan berkendara.', '2025-03-28 07:57:18.201672+00'),
(2, 'katana.png', 'Suzuki Katana 4x2', 'Suzuki Katana 4x2 hadir dengan desain ikonik dan tangguh, cocok bagi pecinta mobil klasik yang mencari keandalan dan gaya vintage. Ditenagai mesin 1.0L yang efisien, mobil ini ringan, lincah, dan nyaman untuk penggunaan di perkotaan maupun perjalanan santai.', '2025-03-28 07:58:45.956623+00'),
(3, 'jazz.png', 'Honda Jazz IDSI MT', 'Honda Jazz i-DSI MT menawarkan performa lincah, efisiensi bahan bakar tinggi, dan desain kompak yang stylish. Ditenagai mesin 1.5L i-DSI, mobil ini memberikan tenaga halus dan konsumsi BBM yang optimal, cocok untuk penggunaan harian di perkotaan.', '2025-03-28 08:03:39.147276+00');



-- Create galleries table
CREATE TABLE IF NOT EXISTS public.galleries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  year INTEGER NOT NULL,
  color TEXT NOT NULL,
  mileage INTEGER NOT NULL,
  transmission TEXT NOT NULL,
  fuel_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  image_url TEXT NOT NULL
);

-- Insert sample data into galleries
INSERT INTO public.galleries (id, name, year, color, mileage, transmission, fuel_type, created_at, image_url) VALUES
(1, 'Honda CR-V 2.4 AT', 2017, 'Hitam', 84000, 'Otomatis', 'Bensin', '2025-03-28 11:25:35.559559+00', 'crv.png');
