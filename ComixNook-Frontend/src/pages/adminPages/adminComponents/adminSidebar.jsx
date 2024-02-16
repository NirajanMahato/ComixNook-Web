import {FaUserCog} from "react-icons/fa";
import {BiSolidCategoryAlt} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import {MdCollectionsBookmark, MdSpaceDashboard} from "react-icons/md";
import comixNook from "../../../../public/Logos/ComixNookLogo.png"
import adminImage from "../../../../public/Logos/DSC03203-01.jpeg"
import "./adminSidebar.css"
import {TbLogout2} from "react-icons/tb";


const AdminSidebar = () =>{
    return(
        <>
            <div className={"admin-sidebar"}>
                <div className={"admin-logo"}>
                    <img src={comixNook} alt={"ComicNook"} width={"140px"}/>
                </div>

                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <NavLink to={"/AdminDashboard"}>
                            <li className={'sidebar-list-item'}>
                                <span><MdSpaceDashboard style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Dashboard</a>
                            </li>
                        </NavLink>
                        <NavLink to={"/CustomerPage"}>
                            <li className={`sidebar-list-item`}>
                                <span><FaUserCog style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Visitors</a>
                            </li>
                        </NavLink>

                        <NavLink to={"/ManageGenre"}>
                            <li className={`sidebar-list-item`}>
                                <span><BiSolidCategoryAlt style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Genres</a>
                            </li>
                        </NavLink>

                        <NavLink to={"/ManageComic"}>
                            <li className={`sidebar-list-item`}>
                                <span><MdCollectionsBookmark style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Manage Comics</a>
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div className={"sidebar-btn-div"}>
                    <div className={"sidebar-btn flex items-center rounded-xl p-2 cursor-pointer backdrop-blur-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"}>
                        {/*<FaUserCircle style={{fontSize:"1.6rem",marginRight:"7px"}}/>*/}
                        <img src={adminImage} alt={"Admin-Image"} className={"rounded-lg w-8 h-8 bg-center mr-2 opacity-95"} style={{objectFit: 'cover' }}/>
                        <h1 className={"gilroy-semibold text-sm mr-1"}>Nirajan Mahato <h4 className={"-mt-1"} style={{fontSize:"0.6rem"}}>nirajanmahato44@gmail.com</h4> </h1>
                        <span><TbLogout2 style={{fontSize:"1.6rem",color:"gray"}}/></span>
                    </div>
                    {/*<button type={"button"}><span><IoMdLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/></span>Log Out</button>*/}
                </div>
            </div>
        </>
    )
}

export default AdminSidebar