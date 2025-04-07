import Categories from "@/components/Categories";
import FeaturedSeller from "@/components/FeaturedSeller";
import FoodCard from "@/components/FoodCard";
import Kitchens from "@/components/Kitchens";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="px-6 py-4  w-full space-y-2">
      <Categories />
      <Slider />
      <Kitchens />
      <FeaturedSeller />
      <FoodCard />
      
    </div>
  );
}
