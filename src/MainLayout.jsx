import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex">
            <div className="w-1/6 h-screen flex bg-white ">
                <Header />
            </div>
            <div className="w-5/6 pt-4 ps-4 bg-white h-screen rounded-s-[80px]">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;