import React from "react";
import { Route, Routes } from "react-router-dom";
import { privatesRoutes, publicRoutes } from "./router/routes";

const isAuth = false;

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {isAuth &&
        privatesRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
    </Routes>
  );
};

export default AppRouter;
