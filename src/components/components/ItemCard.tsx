import { Link } from "react-router";
import { Button } from "../ui/button";
import { CardContent, CardTitle } from "../ui/card";

const ItemCard = () => {
  return (
    <div>
      <div className="rounded-2xl border-b-8 border-red-300 shadow-2xl">
        <Link to={"/details/1"}>
          <div className="p-0 m-0 ">
            <div>
              <img
                src={`https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book4-copyright-400x600.jpg`}
                alt=""
                className="w-full rounded-2xl"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <CardTitle>A Doctor in the House</CardTitle>

              <CardContent>
                <p className="text-left">
                  <span>By:</span>
                  <span className="text-red-500 pl-1.5 font-semibold">
                    Candy Carson
                  </span>
                </p>
              </CardContent>

              <div className="flex justify-end">
                <Button>Borrow Now</Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
