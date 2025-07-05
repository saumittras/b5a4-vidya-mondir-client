import DiscoverMoreBooks from "@/components/components/DiscoverMoreBooks";
import { Hero } from "@/components/components/Hero";
import FindGenre from "@/components/components/home/FindGenar";
import { GetInTouch } from "@/components/components/home/GetInTouch";
import ItemCard from "@/components/components/ItemCard";
import SectionTitle from "@/components/components/SectionTitle";
import SelectBook from "@/components/components/SelectBook";

const Home = () => {
  return (
    <div>
      {/* carosol */}
      <Hero />

      {/* discover your next book  */}
      <SelectBook />
      {/* Get in touch */}
      <GetInTouch />
      {/* getin touch */}
      <div className="div w-11/12 mx-auto">
        <SectionTitle title="New Released Books" details="" />
        <div className="div grid gap-4 grid-cols-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className="button py-10">
          <DiscoverMoreBooks text="Find More Genre" link="all-books" />
        </div>
      </div>

      {/* book genre */}
      <FindGenre />
      {/* best favorite books */}

      {/* Best seller Authors */}
    </div>
  );
};

export default Home;
