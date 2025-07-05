import ItemCard from "@/components/components/ItemCard";
import SortAllBooks from "@/components/components/SortAllBooks";
import hero from "../assets/allbook.jpg";

const AllBooks = () => {
  const boxStyle: React.CSSProperties = {
    position: "sticky",
    top: "0",

    zIndex: 1000,
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div className="w-full">
      <div className="hero">
        <img className=" aspect-[18/6]" src={hero} alt="" />
      </div>
      <div className="title"></div>

      <div className="book-catagory w-11/12 gap-4 mx-auto grid grid-cols-9">
        <div style={boxStyle} className="filter col-span-2">
          <SortAllBooks />
        </div>
        <div className="card w-full col-span-7">
          <div className="sort "></div>
          <div className="carsss w-full gap-4 grid grid-cols-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
