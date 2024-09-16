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
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";
import Checkout from "../Pages/Checkout/Checkout";
import DashboardMain from "../Dashboard/AdminLayout/DashboardMain";
import AdminHome from "../Dashboard/AdminPages/AdminHome/AdminHome/AdminHome";
import AllProducts from "../Dashboard/AdminPages/AllProducts/AllProducts";
import AddNewProduct from "../Dashboard/AdminPages/AddNewProduct/AddNewProduct";
import Categories from "../Dashboard/AdminPages/Categories/Categories";
import AllOrders from "../Dashboard/AdminPages/AllOrders/AllOrders";
import PendingOrders from "../Dashboard/AdminPages/PendingOrders/PendingOrders";
import AllUsers from "../Dashboard/AdminPages/AllUsers/AllUsers";
import Coupons from "../Dashboard/AdminPages/Coupons/Coupons";
import Messages from "../Dashboard/AdminPages/Messages/Messages";
import Transactions from "../Dashboard/AdminPages/Transactions/Transactions";
import AdminUsers from "../Dashboard/AdminPages/AdminUsers/AdminUsers";
import CompleteOrders from "../Dashboard/AdminPages/CompleteOrders/CompleteOrders";
import CanceledOrders from "../Dashboard/AdminPages/CanceledOrders/CanceledOrders";
import SalesReports from "../Dashboard/AdminPages/SalesReports/SalesReports";
import SiteSettings from "../Dashboard/AdminPages/SiteSettings/SiteSettings";
import AdminProductDetailsPage from "../Dashboard/AdminProductDetailsPage/AdminProductDetailsPage";
import UpdateProduct from "../Dashboard/UpdateProduct/UpdateProduct";
import PaymentSuccess from "../Pages/Checkout/PaymentStatus/PaymentSuccess";
import PaymentCancel from "../Pages/Checkout/PaymentStatus/PaymentCancel";
import PaymentFailed from "../Pages/Checkout/PaymentStatus/PaymentFailed";
import MyOrders from "../Pages/MyOrders/MyOrders";
import OrderSubmited from "../Pages/Checkout/PaymentStatus/OrderSubmited";
import MyCoupons from "../Pages/MyCoupons/MyCoupons";

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
          path : '/checkout',
          element : <Checkout></Checkout>
        },
        {
          path : '/profile',
          element : <Profile></Profile>
        },
        {
          path : '/product/:id',
          element : <ProductDetailPage></ProductDetailPage>,
          
        },
        {
          path : '/payment-success',
          element : <PaymentSuccess></PaymentSuccess>
        },
        {
          path : '/payment-cancel',
          element : <PaymentCancel></PaymentCancel>
        },
        {
          path : '/payment-failed',
          element : <PaymentFailed></PaymentFailed>
        },
        { 
          path : '/order-submited',
          element : <OrderSubmited></OrderSubmited>
        },
        {
          path : '/profile/myOrders',
          element : <MyOrders></MyOrders>
        },
        {
          path : '/profile/myCoupons',
          element : <MyCoupons></MyCoupons>
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
    }, 

    // dashboard
    {
      path: '/dashboard',
      element : <DashboardMain/>,
      errorElement : <ErrorPage/>,
      children : [
        {
          index : true,
          element : <AdminHome></AdminHome>
        },
        {
          path : '/dashboard/allProducts',
          element : <AllProducts></AllProducts>
        },
        {
          path : '/dashboard/admin/products/:id',
          element : <AdminProductDetailsPage></AdminProductDetailsPage>
        },
        {
          path : '/dashboard/addNewProduct',
          element : <AddNewProduct></AddNewProduct>
        },
        {
          path : '/dashboard/update/:id',
          element : <UpdateProduct></UpdateProduct>
        },
        {
          path : '/dashboard/categories',
          element : <Categories></Categories>
        },
        {
          path : '/dashboard/allOrders',
          element : <AllOrders></AllOrders>
        },
        {
          path : '/dashboard/pendingOrders',
          element : <PendingOrders></PendingOrders>
        },
        {
          path : '/dashboard/allUsers',
          element : <AllUsers></AllUsers>
        },
        {
          path : '/dashboard/coupons',
          element : <Coupons></Coupons>
        },
        {
          path : '/dashboard/message',
          element : <Messages></Messages>
        },
        {
          path : '/dashboard/transactions',
          element : <Transactions></Transactions>
        },
        {
          path : '/dashboard/adminUsers',
          element : <AdminUsers></AdminUsers>
        },
        {
          path : '/dashboard/completeOrders',
          element : <CompleteOrders></CompleteOrders>
        },
        {
          path : '/dashboard/canceledOrders',
          element : <CanceledOrders></CanceledOrders>
        },
        {
          path : '/dashboard/salesReports',
          element : <SalesReports></SalesReports>
        },
        {
          path : '/dashboard/siteSettings',
          element : <SiteSettings></SiteSettings>
        },
        
       
      ]
    }

  ]);



export default router;