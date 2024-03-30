import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoList from "@pages/TodoList";
import TodoEdit from "@pages/TodoEdit";
import Layout from "@pages/Layout";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      {
        path: "list/:_id",
        element: <TodoDetail />,
        children: [{ path: "edit", element: <TodoEdit /> }],
      },
      { path: "add", element: <TodoAdd /> },
    ],
  },
]);

export default router;
