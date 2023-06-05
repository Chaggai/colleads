import { Navigate, Outlet, useOutlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  const outlet = useOutlet();
  const user = false;

  return (
    <>
      <Header />
      <div className="absolute bottom-[63px] top-[88px] overflow-y-scroll">
        {outlet ? (
          <Outlet />
        ) : user ? (
          <Navigate to="/main" />
        ) : (
          <Navigate to="/login/1" />
        )}
      </div>
      <Footer />
    </>
  );
};
export default App;
