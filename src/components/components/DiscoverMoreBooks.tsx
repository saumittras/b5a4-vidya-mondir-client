import { Link } from "react-router";
import { Button } from "../ui/button";
type propsType = {
  text: string;
  link: string;
};

const DiscoverMoreBooks = ({ text, link }: propsType) => {
  return (
    <div className="flex justify-center items-center">
      <Button>
        <Link className="hover:cursor-pointer" to={link}>
          {text}
        </Link>
      </Button>
    </div>
  );
};

export default DiscoverMoreBooks;
