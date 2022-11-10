import AddServices from "../../AddServices/AddServices";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import ServicesCard from "../../Pages/Services/ServicesCard";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch(`http://localhost:5000/services`)

      },
      
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/myreviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/addservices',
          element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: '*', element: <ErrorPage></ErrorPage>

      }

      ]

    }
  ])
  export default router;