import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
