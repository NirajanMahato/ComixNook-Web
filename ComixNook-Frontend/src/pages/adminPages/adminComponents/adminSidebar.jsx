import {FaUserCog} from "react-icons/fa";
import {BiSolidCategoryAlt} from "react-icons/bi";
import {FaBowlFood} from "react-icons/fa6";
import {IoMdLogOut} from "react-icons/io";
import {NavLink} from "react-router-dom";
import {MdCollectionsBookmark, MdSpaceDashboard} from "react-icons/md";
import comixNook from"../../../../public/Logos/ComixNookLogo.png"
import "./adminSidebar.css"


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

                        <NavLink to={"/ManageCategory"}>
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

                <div className={"sidebar-btn"}>
                    <button type={"button"}><span><IoMdLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/></span>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar