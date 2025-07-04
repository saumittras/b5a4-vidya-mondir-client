import ItemCard from "@/components/components/ItemCard";

const AllBooks = () => {
  return (
    <div className="w-full">
      <div className="hero"></div>
      <div className="title"></div>

      <div className="book-catagory w-11/12 gap-4 mx-auto grid grid-cols-9">
        <div className="filter col-span-2">
          <div className="category"></div>
          <div className="author"></div>
        </div>
        <div className="card w-full col-span-7">
          <div className="sort ">
            {/* <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
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
