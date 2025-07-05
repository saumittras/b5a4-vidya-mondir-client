import { Link } from "react-router";
import adventure from "../../../assets/logo/adventure.jpg";
import drama from "../../../assets/logo/drama.jpg";
import horror from "../../../assets/logo/horror.jpg";
import romantic from "../../../assets/logo/romantic.jpg";
import traveling from "../../../assets/logo/traveliing.jpg";
import SectionTitle from "../SectionTitle";
import GenreCard from "./GenreCard";

const FindGenre = () => {
  return (
    <div>
      <div className="title">
        <SectionTitle title="Select your Genre" details="" />
      </div>
      <div className="genre-button flex justify-between w-10/12 mx-auto gap-4">
        <Link to={"/all-books"} className="w-full">
          <div className="box">
            <GenreCard img={adventure} title="Adventure" />
          </div>
        </Link>
        <Link to={"/all-books"} className="w-full">
          <div className="box">
            <GenreCard img={drama} title="Drama" />
          </div>
        </Link>
        <Link to={"/all-books"} className="w-full">
          <div className="box">
            <GenreCard img={horror} title="Horror" />
          </div>
        </Link>
        <Link to={"/all-books"} className="w-full">
          <div className="box">
            <GenreCard img={romantic} title="Romantic" />
          </div>
        </Link>
        <Link to={"/all-books"} className="w-full">
          <div className="box">
            <GenreCard img={traveling} title="Traveling" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FindGenre;
