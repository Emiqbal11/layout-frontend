import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Layout/Navbar/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import DashboardSa from "./Pages/StateAgent/Dashboard/DashboardSa";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="maincontainer">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="content">
            <Outlet />
          </main>
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashboardSa />,
        },
        {
          path: "/products",
          element: <Products />,
        },

        {
          path: "/reports",
          element: <Reports />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
