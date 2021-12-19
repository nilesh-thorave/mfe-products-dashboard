import { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  MemoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import App from "./App";

function AppWrapper({ onNavigate, parentPath }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    onNavigate(location);
  }, [location]);

  useEffect(() => {
    const { pathname } = location;
    if (pathname !== parentPath) {
      navigate(parentPath);
    }
  }, [parentPath]);
  return <App />;
}

// Mount function to start up the app
const mount = (el, { onNavigate, currentPath } = {}) => {
  ReactDOM.render(
    <MemoryRouter initialEntries={[currentPath]}>
      <AppWrapper onNavigate={onNavigate} parentPath={currentPath} />
    </MemoryRouter>,
    el
  );
};

// If we are in development and in isolation,
// render immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_product_dashboard_root");

  if (devRoot) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      devRoot
    );
  }
}

// We are running through container
// and we should export the mount function
export { mount };
