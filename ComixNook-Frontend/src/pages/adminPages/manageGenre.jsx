import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import AdminHeader from "./adminComponents/adminHeader.jsx";
import {IoSearch} from "react-icons/io5";
import {FaPlus} from "react-icons/fa";


const ManageGenre = () =>{
    return(
        <>
            <div className={"manage-genre-div"}>
                <AdminSidebar/>
                <div className={"pl-60 pr-6 pt-2 w-full flex items-center justify-between"}>
                    <div className={"w-2/12 p-2"}>
                        <h1 className={"gilroy-bold text-3xl"}>Genres</h1>
                        <h4 className={"font-semibold text-sm"}>12 genre found</h4>
                    </div>
                    <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                        <input type={"search"} placeholder={"Search Genres"} className={"w-full bg-transparent"} />
                        <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                    </div>
                    <div className={"btn-style2 bg-black rounded-xl"}>
                        <h3 className={"h-10 "}><a className={"gilroy-medium flex items-center px-2"}><FaPlus className={"text-sm mr-1"}/>Add Genre</a></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageGenre;