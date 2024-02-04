import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/adminPages/dashboard/adminDashboard.jsx";
import './App.css'
import HomePage from "./pages/homePage/homePage.jsx";
import NewPage from "./pages/newPage/newPage.jsx";
import LoginPage from "./pages/login&Register/loginPage.jsx";
import RegisterPage from "./pages/login&Register/registerPage.jsx";
import ForgetPassword from "./pages/login&Register/forgetPassword.jsx";
import GenrePage from "./pages/genrePage/genrePage.jsx";
import ManageComic from "./pages/adminPages/manageComic.jsx";
import ManageGenre from "./pages/adminPages/manageGenre.jsx";


const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={createBrowserRouter([
              {path: "/", element: <HomePage/>},
              {path: "/NewPage", element: <NewPage/>},
              {path: "/GenrePage", element: <GenrePage/>},
              {path: "/LoginPage", element: <LoginPage/>},
              {path: "/RegisterPage", element: <RegisterPage/>},
              {path: "/ForgetPassword", element: <ForgetPassword/>},
              {path: "/AdminDashboard", element: <AdminDashboard/>},
              {path: "/ManageComic", element: <ManageComic/>},
              {path: "/ManageGenre", element: <ManageGenre/>},
          ])} />
        </QueryClientProvider>
      </>
  )
}

export default App
