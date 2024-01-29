import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/adminPages/dashboard/adminDashboard.jsx";
import './App.css'
import HomePage from "./pages/homePage/homePage.jsx";
import NewPage from "./pages/newPage/newPage.jsx";
import LoginPage from "./pages/login&Register/loginPage.jsx";


const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={createBrowserRouter([
              {path: "/", element: <HomePage/>},
              {path: "/NewPage", element: <NewPage/>},
              {path: "/AdminDashboard", element: <AdminDashboard/>},
              {path: "/LoginPage", element: <LoginPage/>},
          ])} />
        </QueryClientProvider>
      </>
  )
}

export default App
