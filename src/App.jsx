import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Navbar from "./componenets/Navbar";

import Home from "./pages/Home";
import Footer from "./componenets/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import ProductsSection from "./pages/Product";
import Profile from "./pages/Profile";
import RecipesSection from "./pages/Recipes";
import CartPage from "./pages/Cart";
import BookTablePage from "./pages/BookTable";
import CouponsPage from "./pages/Coupon";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductList from "./admin/ProductList";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login/>},
      { path: "/signup", element: <Signup/>},
      { path: "/about", element: <AboutUs/>},
      { path: "/contact", element: <ContactUs/>},
      { path: "/products", element: <ProductsSection/>},
      { path: "/product/:id", element: <ProductDetailsPage/> },
      { path: "/profile" , element: <Profile/>},
      { path: "/recipes" , element: <RecipesSection/>},
      { path: "/cart" , element: <CartPage/>},
      { path: "/book-table" , element: <BookTablePage/>},
      { path: "/coupons" , element: <CouponsPage/>},

      { path: "/admin/products", element: <ProductList /> },
      { path: "/admin/products/add", element: <AddProduct /> },
      { path: "/admin/products/edit/:id", element: <EditProduct /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}