import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import AdminHeader from "./adminComponents/adminHeader.jsx";
import {FaPlus} from "react-icons/fa";


const ManageComic = () =>{
    return(
        <>
            <div className={"manage-comic-div"}>
                <AdminSidebar/>
                <AdminHeader/>

            </div>
        </>
    )
}

export default ManageComic;