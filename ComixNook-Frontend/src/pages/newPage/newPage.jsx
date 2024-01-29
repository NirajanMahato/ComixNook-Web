import "./newPage.css"
import Navbar from "../components/navbar.jsx";
import NewSlidebar from "./newSlidebar.jsx";

const NewPage =() =>{
    return(
        <>
            <div className={"newpage-div"}>
                <Navbar/>
                <div className={"newpage-main-content"}>
                    <NewSlidebar/>
                </div>
            </div>

        </>
    )
}

export default NewPage