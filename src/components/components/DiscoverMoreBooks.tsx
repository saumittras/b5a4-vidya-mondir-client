import { Link } from "react-router";
import { Button } from "../ui/button";

const DiscoverMoreBooks = () => {
  return (
    <div className="flex justify-center items-center">
      <Button>
        <Link className="hover:cursor-pointer" to={"/all-books"}>
          DISCOVER MORE BOOKS
        </Link>
      </Button>
    </div>
  );
};

export default DiscoverMoreBooks;
