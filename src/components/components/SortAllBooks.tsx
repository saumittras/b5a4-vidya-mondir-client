import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const SortAllBooks = () => {
  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="w-full "
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">CATEGORY</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <Tabs defaultValue="all" className="w-full h-auto ">
              <TabsList className="flex flex-col justify-start items-start w-full h-auto">
                <TabsTrigger
                  className="w-full flex justify-start pl-4"
                  value="all"
                >
                  ALL
                </TabsTrigger>
                <TabsTrigger
                  className="w-full flex justify-start pl-4"
                  value="new"
                >
                  NEW RELEASES
                </TabsTrigger>
                <TabsTrigger
                  className="w-full flex justify-start pl-4"
                  value="top-borrowed"
                >
                  TOP BORROWED
                </TabsTrigger>
                <TabsTrigger
                  className="w-full flex justify-start pl-4"
                  value="awarded"
                >
                  AWARD WINNING
                </TabsTrigger>
                <TabsTrigger
                  className="w-full flex justify-start pl-4"
                  value="author"
                >
                  BY AUTHOR
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">BY AUTHOR</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">BY GENAR</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">SORT BY</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SortAllBooks;
