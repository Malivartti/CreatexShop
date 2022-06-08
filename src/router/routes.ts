import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import Catalog from "../pages/Catalog";

export const publicRoutes = [
  { path: "/", element: Home },
  { path: "catalog", element: Catalog },
  { path: "*", element: NotFound },
];

export const privatesRoutes = [{ path: "account", element: Account }];
