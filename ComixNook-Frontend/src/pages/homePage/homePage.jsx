import "./homePage.css"
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {Link} from "react-router-dom";

const HomePage = () =>{
    return(
        <>
            <div className={"homepage-div"}>
                <Navbar/>
                <div className={"homepage-main-content p-10"}>
                    <h1 className={"text-6xl gilroy-bold md:w-7/12"}>Discover the <p>coolest comic platform</p> in Nepal.</h1>
                    <div className={"btn-style2 mt-8 w-52"}>
                        <Link to={'/GenrePage'}>
                            <h3 className={"bg-black  rounded-2xl h-14 gilroy-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"}>
                                <a className={"text-xl"}>Explore Comics</a>
                            </h3>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;