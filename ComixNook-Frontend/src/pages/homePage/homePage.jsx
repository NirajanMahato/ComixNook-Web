import "./homePage.css"
import Navbar from "../components/navbar.jsx";

const HomePage = () =>{
    return(
        <>
            <div className={"homepage-div"}>
                <Navbar/>
                <div className={"homepage-main-content"}>
                    Homepage
                </div>
            </div>
        </>
    )
}

export default HomePage;