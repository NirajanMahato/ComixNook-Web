import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import {IoSearch} from "react-icons/io5";
import {FaPlus} from "react-icons/fa";
import {MdDelete, MdEditSquare} from "react-icons/md";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";


const ManageGenre = () =>{

    const[search, setSearch] = useState('');

    // Fetching genre from API
    const{data:genreData} = useQuery({
        queryKey:["GET_GENRE"],
        queryFn(){
            return axios.get("http://localhost:8082/genre/getAll")
        }
    })

    // //Searching data
    // const filteredData = genreData?.data.filter((i) =>
    //     i.name.toLowerCase().includes(search.toLowerCase())
    // );

    return(
        <>
            <div className={"manage-genre-div"}>
                <AdminSidebar/>
                <div className={"ml-60 px-6 flex flex-col items-center"}>
                    <div className={"pt-2 w-full flex items-center justify-between"}>
                        <div className={"w-2/12 p-2"}>
                            <h1 className={"gilroy-bold text-3xl"}>Genres</h1>
                            <h4 className={"font-semibold text-sm"}>12 genre found</h4>
                        </div>
                        <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                            <input type={"search"} placeholder={"Search Genres"} className={"w-full bg-transparent"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                        </div>
                        <div className={"btn-style2 bg-black rounded-xl"}>
                            <h3 className={"h-10 "}><a className={"gilroy-medium flex items-center px-2"}><FaPlus className={"text-sm mr-1"}/>Add Genre</a></h3>
                        </div>
                    </div>
                    <table className={"mt-8 w-10/12 text-xl rounded-xl "}>
                        <thead className={"h-12 text-white bg-gray-600 rounded-xl gilroy-semibold"}>
                            <tr>
                                <th className={"px-2"}>ID</th>
                                <th className={"px-10"}>Genre</th>
                                <th className={"px-10"}>Edit</th>
                                <th className={"px-10"}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            genreData?.data.map((i) =>{
                                return(
                                    <tr  key={i?.id} className={"h-10 border-b-cyan-950 border-b"}>
                                        <td>{i?.id}</td>
                                        <td>{i?.genre}</td>
                                        <td><h1 className={"action-icon hover:text-black"}><MdEditSquare/></h1></td>
                                        <td><h1 className={"action-icon hover:text-red-800"}><MdDelete /></h1></td>
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

export default ManageGenre;