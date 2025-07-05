import { CardContent, CardTitle } from "@/components/ui/card";

type GenreCardProps = {
  img: string;
  title: string;
};
const GenreCard = ({ img, title }: GenreCardProps) => {
  return (
    <div>
      <div className="shadow-2xl shadow-orange-300">
        <CardContent>
          <div className="photo border-2 ">
            <img className="w-full h-full" src={img} alt="" />
          </div>
        </CardContent>
        <CardTitle className="text-center hover:zoom-in-75">{title}</CardTitle>
      </div>
    </div>
  );
};

export default GenreCard;
