import './loginPage.css'
import Navbar from "../components/navbar.jsx";
import {MdEmail} from "react-icons/md";
import {IoMdLock} from "react-icons/io";
import {Link} from "react-router-dom";


const LoginPage = () =>{

    return(
        <>
            <div className={"login-main-div flex w-full h-screen pt-24 px-10 pb-4"}>
                <Navbar/>
                <div className={"w-full md:w-6/12 flex justify-center items-center flex-col -mt-28 md:-mt-6"}>
                    <h1 className={"text-3xl font-bold mb-1 flex"}>Welcome to ComixNook</h1>
                    <h3>Please enter your credentials.</h3>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-14 flex items-center pl-4 pr-2"}>
                        <MdEmail style={{fontSize:"1.4rem",marginRight:"0.5rem",color:"gray"}}/>
                        <input type={"text"} placeholder={"Email"} className={"w-full outline-none appearance-none"}/>
                    </div>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-4 flex items-center pl-4 pr-2"}>
                        <IoMdLock style={{fontSize:"1.4rem",marginRight:"0.5rem",color:"gray"}}/>
                        <input type={"password"} placeholder={"Password"} className={"w-full outline-none"}/>
                    </div>
                    <div className={"md:w-6/12 w-11/12 flex justify-end pt-3 pr-1"}>
                        <Link to={"/ForgetPassword"}><h3 className={"text-gray-500 cursor-pointer transition-all hover:text-black"}>Forgot password?</h3></Link>
                    </div>
                    <button className={"mt-8 md:w-6/12 w-11/12 rounded-3xl h-12 bg-black text-white text-lg font-normal transition duration-300 ease-in-out hover:bg-purple-950 hover:shadow-md"}>Login</button>
                    <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
                        <h3 className={"text-gray-500"}>Don't have an account? </h3>
                        <Link to={"/RegisterPage"}><h3 className={"text-purple-700 ml-1 cursor-pointer transition-all"}>Sign up</h3></Link>
                    </div>
                </div>
                <div className="md:w-6/12 relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp13366070.jpg')", borderRadius: "15%" }}>

                </div>

            </div>
        </>
    )
}

export default LoginPage