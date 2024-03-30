import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "react-csspin/dist/style.css";
import { ReactCsspin } from "react-csspin";
import router from "./routes-lazy";

function App() {
  return (
    <Suspense fallback={<ReactCsspin />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
