import Layout from "@/layout/Layout";
import AddBook from "@/pages/AddBook";
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
      },
      {
        path: "borrow",
      },
    ],
  },
]);

export default router;
