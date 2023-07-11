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
        <Container fluid>
          <Row>
            <Col md={12} className="class-for-header px-2 border-bottom px-1 ">
              <Header />
            </Col>
          </Row>
          <Row className="p-0 ">
            <Col
              sm={4}
              md={2}
              lg={2}
              className="class-for-sidebar border-end p-0 "
            >
              <Sidebar />
            </Col>
            <Col sm={12} md={10} lg={10} className="class-for-contents">
              <Outlet />
            </Col>
          </Row>
        </Container>
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
