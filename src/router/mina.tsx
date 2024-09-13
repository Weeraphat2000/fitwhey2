import { Navigate, useRoutes } from "react-router-dom";
import { ModalFitWhey } from "../pages/ModalFitWhey";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";

export default function MainRouter() {
  return useRoutes([
    {
      path: "/modal",
      element: <ModalFitWhey />,
    },
    {
      path: "/detail",
      element: <DetailProduct />,
    },

    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/404",
      element: <div>404</div>,
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
