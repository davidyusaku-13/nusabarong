import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "Toyota Camry 2019",
    price: "$15,000",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Honda Civic 2020",
    price: "$16,500",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Ford Fusion 2018",
    price: "$14,000",
    image: "/placeholder.svg",
  },
  // Add more cars as needed
];

export default function Galleries() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Car Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car.id}>
            <CardHeader>
              <CardTitle>{car.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-xl font-bold">{car.price}</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
