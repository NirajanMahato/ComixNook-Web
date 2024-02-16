import AdminSidebar from "./adminComponents/adminSidebar.jsx";
import {IoSearch} from "react-icons/io5";
import {MdDelete, MdEditSquare} from "react-icons/md";
import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {FaPlusCircle} from "react-icons/fa";
import {useForm} from "react-hook-form";


const ManageComic = () =>{

    const[search, setSearch] = useState('');

    // Sending data to backend
    const {register,
        handleSubmit,
        formState,
        reset} = useForm();

    const {errors} = formState;

    const useApiCall = useMutation({
        mutationKey:["POST_COMIC_DATA"],
        mutationFn:(payload)=>{
            console.log(payload)
            return axios.post("http://localhost:8082/item/save",payload)
        },onSuccess: () => {
            reset();
            refetch();
        }
    })

    const onSubmit=(value)=>{
        useApiCall.mutate(value)
    }

    // Fetching comic item from API
    const{data:itemData,refetch} = useQuery({
        queryKey:["GET_COMIC_ITEM"],
        queryFn(){
            return axios.get("http://localhost:8082/item/getAll")
        }
    })
    // Fetching genre from API
    const{data:genreData} = useQuery({
        queryKey:["GET_GENRE"],
        queryFn(){
            return axios.get("http://localhost:8082/genre/getAll")
        }
    })

    //Searching comics
    const filteredData = itemData?.data.filter((i) => {
        return search.toLowerCase() === '' ? i :i?.itemName.toLowerCase().includes(search);
    })

    //Deleting comic Item
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_COMIC_BY_ID"],
            mutationFn(id){
                return axios.delete("http://localhost:8082/item/deleteById/"+id);
            }
            ,onSuccess(){refetch()}
        }
    )

    // Function to close the modal and reset the form fields
    const closeModalAndReset = () => {
        const modal = document.getElementById('my_modal_3');
        const form = modal.querySelector('form');
        modal.close();
        form.reset();
    };

    return(
        <>
            <div className={"manage-comic-div"}>
                <AdminSidebar/>
                <div className={"ml-60 px-6 pt-2 pb-24 flex flex-col items-center"}>
                    <div className={"w-full flex items-center justify-between"}>
                        <div className={"w-2/12 p-2"}>
                            <h1 className={"gilroy-bold text-3xl"}>Comics</h1>
                            <h4 className={"font-semibold text-sm"}>12 comics found</h4>
                        </div>
                        <div className={"w-4/12 h-10 bg-gray-200 flex items-center justify-between rounded-xl px-2"}>
                            <input type={"search"} placeholder={"Search Comics"} className={"w-full bg-transparent"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <span className={"ml-1 text-xl cursor-pointer"}><IoSearch /></span>
                        </div>
                        <div className={"btn-style2 bg-black rounded-xl"}>
                            <h3 className={"h-10"} onClick={()=>document.getElementById('my_modal_3').showModal()}>
                                <a className={"gilroy-medium flex items-center px-2"}><FaPlusCircle className={"text-lg mr-1"}/>Add Comic</a>
                            </h3>
                        </div>
                    </div>

                    <table className={"mt-8 w-full text-lg rounded-xl"}>
                        <thead className={"h-12 text-white bg-gray-600 rounded-xl gilroy-semibold"}>
                        <tr>
                            <th className={"px-2"}>ID</th>
                            <th className={"px-20"}>Comics Name</th>
                            <th className={"px-10"}>Author</th>
                            <th className={"px-6"}>Genre</th>
                            <th className={"px-6"}>Image</th>
                            <th className={"px-4"}>Released date</th>
                            <th className={"px-8"}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filteredData?.map((i) =>{
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
                                            <h1 onClick={() => {
                                                if (window.confirm("Are you sure you want to delete this comic item?")) {
                                                    deleteByIdApi.mutate(i?.id);
                                                }}}
                                                className={"action-icon hover:text-red-800"}><MdDelete /></h1>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal w-4/12 h-[29rem] mr-80 shadow-2xl transform rounded-2xl ">
                    <div className="modal-box">
                        <form method="dialog" className={"px-6 py-6"} onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button type={"button"} onClick={closeModalAndReset} className="btn w-8 h-8 rounded-full hover:bg-gray-200 btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-2xl">Add Comic</h3>
                            <div className={"w-full h-12 border-solid mt-6 border rounded-xl border-gray-300 flex items-center pl-4 pr-2"}>
                                <select className={"w-full outline-none cursor-pointer"}>
                                    <option disabled selected>Select Genre</option>
                                    {genreData && genreData.data.map((i) => (
                                        <option key={i.id} value={i.id}>{i.genre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={"w-full h-12 border-solid border rounded-xl border-gray-300 mt-5 flex items-center pl-4 pr-2"}>
                                <input type={"text"} placeholder={"Enter Comic Name"} className={"w-full outline-none appearance-none"} />
                            </div>
                            <div className={"w-full h-12 border-solid border rounded-xl border-gray-300 mt-5 flex items-center pl-4 pr-2"}>
                                <input type={"text"} placeholder={"Enter Author's Name"} className={"w-full outline-none appearance-none"} />
                            </div>
                            <div className={"w-full flex mt-5"}>
                                <div className={"w-5/12 justify-between items-center"}>
                                    <h1 className={"text-lg pl-1"}>Released date: </h1>
                                    <div className={"w-full h-12 border-solid border rounded-xl border-gray-300 flex items-center px-2"}>
                                        <input type={"date"} placeholder={"Enter Comic Name"} className={"outline-none appearance-none text-gray-400"} />
                                    </div>
                                </div>
                                <div className={"w-7/12 justify-between items-center pl-1"}>
                                    <h1 className={"text-lg pl-1"}>Select Image: </h1>
                                    <div className={"w-full h-12 justify-between border-solid border rounded-xl border-gray-300 flex items-center pl-1"}>
                                        <input type={"file"} className={"text-gray-400"}/>
                                    </div>
                                </div>
                            </div>
                            <button type={"submit"} className={"btn-add w-24 h-12 absolute bottom-6 right-6"}>Add</button>
                        </form>
                    </div>
                </dialog>

            </div>
        </>
    )
}

export default ManageComic;