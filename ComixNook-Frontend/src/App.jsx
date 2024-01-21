import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/adminPages/dashboard/adminDashboard.jsx";
import './App.css'
import HomePage from "./pages/homePage/homePage.jsx";


const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={createBrowserRouter([
            {path: "/", element: <HomePage/>},
            {path: "/AdminDashboard", element: <AdminDashboard/>}
          ])} />
        </QueryClientProvider>
      </>
  )
}

export default App
