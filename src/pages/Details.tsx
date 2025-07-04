import { CardCarousel } from "@/components/components/CardCarousel";
import DetailsDataTable from "@/components/components/DetailsDataTable";
import SectionTitle from "@/components/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Details = () => {
  const isAvilable: boolean = false;
  return (
    <div className="details">
      <div className="title"></div>
      <div className="detail-content">
        <div className="sm:w-11/12 lg:w-10/12 p-4 sm:my-4 lg:my-10 mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          <div className="book-image h-full w-full flex justify-end col-span-1">
            <img
              src={
                "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg"
              }
              alt=""
              className=""
            />
          </div>

          <div className="book-content  sm:p-4 lg:p-6 w-full col-span-2">
            <div className="header w-full">
              <div className="avilable flex justify-between">
                <h2 className=" sm:text-2xl lg:text-4xl font-extrabold">
                  A Doctor in the House
                </h2>
                <Badge
                  className={`text-blue-300 font-extrabold  rounded-full ${
                    isAvilable ? "bg-green-500" : "bg-red-600"
                  }`}
                >
                  {isAvilable ? "Available" : "Not Available"}
                </Badge>
              </div>
              <p>
                <span>Author: </span>
                <span className="text-red-500 pl-1.5 font-semibold">
                  Candy Carson
                </span>
              </p>
            </div>

            <div className="description py-6">
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>

            <div className="content">
              <div className="table-data">
                <DetailsDataTable />
              </div>
            </div>

            <div className="div flex justify-center py-20">
              <div className="flex w-full max-w-sm items-center gap-4">
                <Input
                  className="w-sm"
                  type="number"
                  placeholder="Book Copie"
                />
                <Button
                  className={`${
                    isAvilable ? "bg-green-500" : "bg-red-600 text-white"
                  }`}
                  disabled={!isAvilable}
                  type="submit"
                  variant="outline"
                >
                  {isAvilable ? "Borrow Now !" : "Not Avilable"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related">
        <div className="title">
          <SectionTitle title="Related Books" details="" />
        </div>
        <div className="cards-section w-11/12 mx-auto">
          {/* <div className="div grid gap-4 grid-cols-5">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div> */}
          <CardCarousel />
        </div>
      </div>
    </div>
  );
};

export default Details;
