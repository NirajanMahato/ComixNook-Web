import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/adminPages/dashboard/adminDashboard.jsx";
import './App.css'
import HomePage from "./pages/homePage/homePage.jsx";
import NewPage from "./pages/newPage/newPage.jsx";
import LoginPage from "./pages/login&Register/loginPage.jsx";
import RegisterPage from "./pages/login&Register/registerPage.jsx";
import ForgetPassword from "./pages/login&Register/forgetPassword.jsx";
import AzListPage from "./pages/A-ZlistPage/azListPage.jsx";


const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={createBrowserRouter([
              {path: "/", element: <HomePage/>},
              {path: "/NewPage", element: <NewPage/>},
              {path: "/AzListPage", element: <AzListPage/>},
              {path: "/AdminDashboard", element: <AdminDashboard/>},
              {path: "/LoginPage", element: <LoginPage/>},
              {path: "/RegisterPage", element: <RegisterPage/>},
              {path: "/ForgetPassword", element: <ForgetPassword/>},
          ])} />
        </QueryClientProvider>
      </>
  )
}

export default App
