import { Hero } from "@/components/components/Hero";
import ItemCard from "@/components/components/ItemCard";
import SelectBook from "@/components/components/SelectBook";

const Home = () => {
  return (
    <div>
      {/* carosol */}
      <Hero />

      {/* discover your next book  */}
      <SelectBook />

      {/* getin touch */}
      <div className="div w-11/12 mx-auto">
        <div className="div grid gap-4 grid-cols-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      {/* book ganer */}

      {/* best favorite books */}

      {/* Best seller Authors */}
    </div>
  );
};

export default Home;
