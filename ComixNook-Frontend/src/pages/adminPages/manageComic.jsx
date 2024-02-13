import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import {IoSearch} from "react-icons/io5";
import {FaPlus} from "react-icons/fa";
import {MdDelete, MdEditSquare} from "react-icons/md";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const ManageComic = () =>{

    const[search, setSearch] = useState('');

    // Fetching comic item from API
    const{data:itemData} = useQuery({
        queryKey:["GET_COMIC_ITEM"],
        queryFn(){
            return axios.get("http://localhost:8082/item/getAll")
        }
    })
    // console.log(itemData?.data);

    // //Searching data
    // const filteredData = itemData?.data.filter((i) =>
    //     i.name.toLowerCase().includes(search.toLowerCase())
    // );

    return(
        <>
            <div className={"manage-comic-div"}>
                <AdminSidebar/>
                <div className={"ml-60 px-6 flex flex-col items-center"}>
                    <div className={"pt-2 w-full flex items-center justify-between"}>
                        <div className={"w-2/12 p-2"}>
                            <h1 className={"gilroy-bold text-3xl"}>Comics</h1>
                            <h4 className={"font-semibold text-sm"}>12 comics found</h4>
                        </div>
                        <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                            <input type={"search"} placeholder={"Search Comics"} className={"w-full bg-transparent"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                        </div>
                        <div className={"btn-style2 bg-black rounded-xl"}>
                            <h3 className={"h-10"}><a className={"gilroy-medium flex items-center px-2"}><FaPlus className={"text-sm mr-1"}/>Add Comic</a></h3>
                        </div>
                    </div>

                    <table className={"mt-8 w-full text-lg rounded-xl"}>
                        <thead className={"h-12 text-white bg-gray-600 rounded-xl gilroy-semibold"}>
                        <tr>
                            <th className={"px-2"}>ID</th>
                            <th className={"px-10"}>Comics Name</th>
                            <th className={"px-10"}>Author</th>
                            <th className={"px-6"}>Genre</th>
                            <th className={"px-8"}>Image</th>
                            <th className={"px-20"}>Released date</th>
                            <th className={"px-5"}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            itemData?.data.map((i) =>{
                                
                                return(
                                    <tr key={i?.id} className={"h-12 border-b-cyan-950 border-b"}>
                                        <td>{i?.itemId}</td>
                                        <td>{i?.itemName}</td>
                                        <td>{i?.author}</td>
                                        <td>{i?.genreId?.genre}</td>
                                        <td>{i?.itemImage}</td>
                                        <td>{new Date(i?.releasedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                        <td className={"flex gap-4 justify-center"}>
                                            <h1 className={"action-icon hover:text-black"}><MdEditSquare/></h1>
                                            <h1 className={"action-icon hover:text-red-800"}><MdDelete /></h1>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageComic;