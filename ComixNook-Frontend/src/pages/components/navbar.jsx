import {Component} from "react";
import "./navbar.css"
import { Link, NavLink} from "react-router-dom";
import comixNook from "../../../public/Logos/ComixNookLogo.png"
import {FaSearch} from "react-icons/fa";

class Navbar extends Component{

    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>
                    <img src={comixNook} alt={"ComicNook"} width={"140px"}/>
                </h1>

                <div className={"menu-icons"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} style={{fontSize:"25px"}}></i>
                </div>
                <div> </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <div className={"nav-menu-list"}>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/GenrePage"}>Genre</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/NewPage"}>New</NavLink>
                        </li>
                        <div className={"navbar-search-wrapper"}>
                            <input type={"search"} placeholder={"SEARCH"}/>
                            <span className={"animate-pulse"}><FaSearch/></span>
                        </div>
                    </div>
                    <div className={"navbar-right btn-style"} >
                        <Link to={'/LoginPage'}><h3><a>Sign-Up</a></h3></Link>
                    </div>
                </ul>
            </nav>
        )
    }
}
export default Navbar