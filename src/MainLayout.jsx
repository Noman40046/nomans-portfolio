import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex">
            <div className="w-1/5  flex border-r-[1px] border-gray-700 bg-white main-header justify-center items-center">
                <Header />
            </div>
            <div className="w-5/6 pt-2  ">         
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;