import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Spin } from "antd";
import { LoaderContainer } from "./App.style";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));

const App = () => {
  return (
    <BrowserRouter>
      <Outlet />
      <div>
        <Suspense
          fallback={
            <LoaderContainer>
              <Spin tip="Loading..." size="large" />
            </LoaderContainer>
          }
        >
          <Routes>
            <Route path="home" element={<Dashboard />} />
            <Route
              path="products/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
