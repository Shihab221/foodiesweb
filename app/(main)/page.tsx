import FoodCard from "@/components/FoodCard";
import Kitchens from "@/components/Kitchens";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-violet-200  w-full">
      <Slider />
      <p className="text-2xl font-bold">Kitchens</p>
      <Kitchens />
      <p  className="text-2xl font-bold">Best Food items</p>
      <div className="flex flex-row">
        <FoodCard />
      </div>
    </div>
  );
}
