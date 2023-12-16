import Dashboard from "../pages/Dashboard";
import Product from "../pages/ProductPage";
import User from "../pages/User";

const DashboardRoutes = [
  {
    path: '/',
    component: <Dashboard />
  },
  {
    path: '/users',
    component: <User />
  },
  {
    path: '/products',
    component: <Product />
  }
]

export default DashboardRoutes;