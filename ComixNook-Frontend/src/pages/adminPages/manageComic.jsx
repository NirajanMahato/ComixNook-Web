import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import {IoSearch} from "react-icons/io5";
import {FaPlus} from "react-icons/fa";


const ManageComic = () =>{
    return(
        <>
            <div className={"manage-comic-div"}>
                <AdminSidebar/>
                <div className={"ml-60"}>
                    <div className={"pr-6 pt-2 w-full flex items-center justify-between"}>
                        <div className={"w-2/12 p-2"}>
                            <h1 className={"gilroy-bold text-3xl"}>Comics</h1>
                            <h4 className={"font-semibold text-sm"}>12 comics found</h4>
                        </div>
                        <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                            <input type={"search"} placeholder={"Search Comics"} className={"w-full bg-transparent"} />
                            <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                        </div>
                        <div className={"btn-style2 bg-black rounded-xl"}>
                            <h3 className={"h-10"}><a className={"gilroy-medium flex items-center px-2"}><FaPlus className={"text-sm mr-1"}/>Add Comic</a></h3>
                        </div>
                    </div>

                    <table className={"mt-8 text-lg rounded-xl"}>
                        <thead className={"text-white bg-gray-600  rounded-xl gilroy-semibold"}>
                        <tr>
                            <td className={"px-2"}>ID</td>
                            <td>Comics Name</td>
                            <td>Author</td>
                            <td>Genre</td>
                            <td>Image</td>
                            <td>Released date</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody className={"border-b-cyan-950 border-b"}>
                            <tr>
                                <td>hghgh</td>
                                <td>hghgh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageComic;