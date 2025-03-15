import Categories from "@/components/Categories";
import FeaturedSeller from "@/components/FeaturedSeller";
import FoodCard from "@/components/FoodCard";
import Kitchens from "@/components/Kitchens";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="px-6 py-4  w-full">
      {/* <p className="text-2xl font-bold mt-2">Categories</p> */}
      <Categories />
      <Slider />
      <p className="text-2xl font-bold mt-2">Kitchens</p>
      <Kitchens />
      <p className="text-2xl font-bold mt-2">Featured Sellers</p>
      <FeaturedSeller />
      <p  className="text-2xl font-bold mt-2">Best Food items</p>
      <div className="flex flex-row">
        <FoodCard />
      </div>
    </div>
  );
}
