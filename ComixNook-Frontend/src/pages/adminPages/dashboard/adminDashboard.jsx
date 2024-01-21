import "./adminDashboard.css"
import AdminSidebar from "../adminComponents/adminSidebar.jsx";
import AdminHeader from "../adminComponents/adminHeader.jsx";

const AdminDashboard = () =>{
    return(
        <>
            <div className={"dashboard-main-div"}>
                <AdminSidebar/>
                <AdminHeader/>
            </div>
        </>
    )
}

export default AdminDashboard