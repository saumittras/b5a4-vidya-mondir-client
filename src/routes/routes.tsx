import Layout from "@/layout/Layout";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import Details from "@/pages/Details";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: "borrow",
      },
      {
        path: "details/1",
        Component: Details,
      },
    ],
  },
]);

export default router;
