import './loginPage.css'
import Navbar from "../components/navbar.jsx";
import {MdEmail} from "react-icons/md";
import {FaLock} from "react-icons/fa";
import {IoMdLock} from "react-icons/io";

const LoginPage = () =>{
    return(
        <>
            <div className={"login-main-div flex w-full h-screen pt-24 px-10 pb-4"}>
                <Navbar/>
                <div className={"w-full md:w-6/12 flex justify-center items-center flex-col"}>
                    <h1 className={"text-3xl font-bold mb-1 flex"}>Welcome to ComixNook</h1>
                    <h3>Please enter your credentials.</h3>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-14 flex items-center pl-4 pr-2"}>
                        <MdEmail style={{fontSize:"1.4rem",marginRight:"0.2rem",color:"gray"}}/>
                        <input type={"text"} placeholder={"Email"} className={"w-full outline-none"}/>
                    </div>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-4 flex items-center pl-4 pr-2"}>
                        <IoMdLock style={{fontSize:"1.4rem",marginRight:"0.2rem",color:"gray"}}/>
                        <input type={"password"} placeholder={"Password"} className={"w-full outline-none"}/>
                    </div>
                    <div className={"md:w-6/12 w-11/12 flex justify-end pt-3 pr-1"}>
                        <h3 className={"text-gray-500 cursor-pointer transition-all hover:text-black"}>Forget password?</h3>
                    </div>
                    <button className={"mt-8 md:w-6/12 w-11/12 rounded-3xl h-12 bg-black text-white text-lg font-normal transition duration-300 ease-in-out hover:bg-purple-950 hover:shadow-md"}>Login</button>
                    <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
                        <h3 className={"text-gray-500"}>Don't have an account? </h3>
                        <h3 className={"text-purple-700 cursor-pointer transition-all"}>Sign up</h3>
                    </div>
                </div>
                <div className="md:w-6/12 relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp13366070.jpg')", borderRadius: "15%" }}>

                </div>

            </div>
        </>
    )
}

export default LoginPage