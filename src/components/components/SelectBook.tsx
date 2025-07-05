import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardCarousel } from "./CardCarousel";
import DiscoverMoreBooks from "./DiscoverMoreBooks";
import SectionTitle from "./SectionTitle";

const SelectBook = () => {
  return (
    <div className="py-10">
      <div className="title-section">
        <SectionTitle
          title="Find Your Perfect Book"
          details="Descover your best books. this is the best books.Descover your best books. this is the best books. Descover your best books. this is the best books.Descover your best books. this is the best books."
        />
      </div>

      <div className="books">
        <div className="tab-section flex justify-center items-center">
          <Tabs defaultValue="new" className="w-[500px] ">
            <TabsList className="">
              <TabsTrigger value="new">NEW RELEASES</TabsTrigger>
              <TabsTrigger value="top-borrowed">TOP BORROWED</TabsTrigger>
              <TabsTrigger value="awarded">AWARD WINNING</TabsTrigger>
              <TabsTrigger value="author">BY AUTHOR</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="bookCard">
          <CardCarousel />
        </div>
      </div>
      <div className="button">
        <DiscoverMoreBooks text="Discover More Books" link="all-books" />
      </div>
    </div>
  );
};

export default SelectBook;
