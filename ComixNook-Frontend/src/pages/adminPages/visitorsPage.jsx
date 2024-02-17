import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import {useLocation} from "react-router-dom";
import {IoSearch} from "react-icons/io5";
import {useState} from "react";


const VisitorsPage = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    const[search, setSearch] = useState('');

    return(
        <>
            <div className={"visitor-main-div"}>
                <AdminSidebar activePage={currentLocation}/>
                <div className={"ml-60 px-6 pt-2 pb-24 items-center"}>
                    <div className={"w-full flex items-center justify-between"}>
                        <div className={"w-2/12 p-2"}>
                            <h1 className={"gilroy-bold text-3xl"}>Visitors</h1>
                            <h4 className={"font-semibold text-sm text-gray-600 ml-1"}>12 visitor found</h4>
                        </div>
                        <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                            <input type={"search"} placeholder={"Search Users"} className={"w-full pl-1 bg-transparent"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitorsPage