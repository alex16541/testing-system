import { MainPage } from "@/pages/MainPage";
import { RouteObject } from "react-router-dom";
import { AppRoute } from "../consts/AppRoute";

export const appRoutes: Record<AppRoute, RouteObject> = {
  [AppRoute.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
};
