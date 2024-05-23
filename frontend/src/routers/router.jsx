import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home.jsx";
import Shop from "../Shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from './../Shop/SingleBook';
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";
import Users from "../dashboard/Users.jsx";
import Favorite from "../components/Favorite.jsx";
import Carts from './../components/Carts';




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/favorite',
            element: <Favorite/>
        },
        {
          path: '/carts',
          element: <Carts/>
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/users",
          element: <Users/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`) 
        },
      ]
    },{
      path: "sign-up",
      element: <Signup/>
    },{
      path: "login",
      element: <Login/>
    },{
      path: "logout",
      element: <Logout/>
    }
  ]);

  export default router;
