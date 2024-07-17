import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ChatMessage from "../Pages/ChatMessage/ChatMessage";
import Location from "../Pages/Location/Location";
import Carts from "../Pages/Carts/Carts";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        }, 
        {
          path : '/category/:category',
          element : <Category></Category>
        },
        {
          path : '/chat',
          element : <ChatMessage></ChatMessage>
        },
        {
          path : '/location',
          element : <Location></Location>
        },
        {
          path : '/carts',
          element : <Carts></Carts>
        },
        {
          path : 'dashboard/profile',
          element : <Profile></Profile>
        }
      ]
    },
    {
      path : '/login',
      element : <Login></Login>
    },
    {
      path : '/signup',
      element : <SignUp></SignUp>
    }
  ]);

export default router;