import {FaUserCog} from "react-icons/fa";
import {BiSolidCategoryAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import {MdCollectionsBookmark, MdSpaceDashboard} from "react-icons/md";
import comixNook from "../../../../public/Logos/ComixNookLogo.png"
import adminImage from "../../../../public/Logos/DSC03203-01.jpeg"
import "./adminSidebar.css"
import {TbLogout2} from "react-icons/tb";
import {doLogout} from "../../service/authService";


const AdminSidebar = ({ activePage }) => {

    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            doLogout();
            window.location.href = '/';
        }
    };

    return(
        <>
            <div className={"admin-sidebar"}>
                <div className={"admin-logo"}>
                    <img src={comixNook} alt={"ComicNook"} width={"140px"}/>
                </div>

                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <Link to={"/AdminDashboard"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "activeAdmin" : ""}`}>
                                <span><MdSpaceDashboard style={{fontSize:"18px"}}/></span>
                                <a>Dashboard</a>
                            </li>
                        </Link>
                        <Link to={"/VisitorsPage"}>
                            <li className={`sidebar-list-item ${activePage === "/VisitorsPage" ? "activeAdmin" : ""}`}>
                                <span><FaUserCog style={{fontSize:"18px"}}/></span>
                                <a>Visitors</a>
                            </li>
                        </Link>

                        <Link to={"/ManageGenre"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageGenre" ? "activeAdmin" : ""}`}>
                                <span><BiSolidCategoryAlt style={{fontSize:"18px"}}/></span>
                                <a>Genres</a>
                            </li>
                        </Link>

                        <Link to={"/ManageComic"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageComic" ? "activeAdmin" : ""}`}>
                                <span><MdCollectionsBookmark style={{fontSize:"18px"}}/></span>
                                <a>Manage Comics</a>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={"sidebar-btn-div"}>
                    <div onClick={handleLogout} className={"sidebar-btn flex items-center rounded-xl p-2 cursor-pointer backdrop-blur-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"}>
                        {/*<FaUserCircle style={{fontSize:"1.6rem",marginRight:"7px"}}/>*/}
                        <img src={adminImage} alt={"Admin-Image"} className={"rounded-lg w-8 h-8 bg-center mr-2 opacity-95"} style={{objectFit: 'cover' }}/>
                        <h1 className={"gilroy-semibold text-sm mr-1"}>{userName} <h4 className={"-mt-1"} style={{fontSize:"0.6rem"}}>{email}</h4> </h1>
                        <span><TbLogout2 style={{fontSize:"1.6rem",color:"gray"}}/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar