import Banner from "@/components/modules/home/Banner";
import Categories from "@/components/modules/home/Categories";
import ItsWorks from "@/components/modules/home/ItsWorks";
import MealProvider from "@/components/modules/home/MealProvider";



export default function Home() {
  return (
    <div>
      <Banner />
      <ItsWorks />
      <Categories />
      <MealProvider/>
    </div>
  );
}
