import DashboardBox from "./components/dashboardBox";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <>
            <div className="right-content">
                <div className="dashboardboxwrapper d-flex">
                    <DashboardBox 
                        color={["#044a81", "#03A9F4"]} 
                        title="Total Users" 
                        count={222} 
                        icon={<FaRegUserCircle />} 
                    />
                    <DashboardBox 
                        color={["#ff837a", "#ff9a22"]} 
                        title="Total Products" 
                        count={150} 
                        icon={<AiOutlineProduct />} 
                    />
                    <DashboardBox 
                        color={["#009688", "#4CAF50"]} 
                        title="Total Orders" 
                        count={320} 
                        icon={<FaCartArrowDown />} 
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
