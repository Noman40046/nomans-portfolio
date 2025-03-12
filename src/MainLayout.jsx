import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-1/5 flex border-r-[1px] border-gray-700 main-header  items-center z-50  fixed">
        <Header />
      </div>
      <div className="lg:w-4/5 lg:ml-[20%]  h-screen pt-2">
        <Outlet />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default MainLayout;
