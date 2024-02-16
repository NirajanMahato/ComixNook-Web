import './loginPage.css'
import Navbar from "../components/navbar.jsx";
import {MdEmail} from "react-icons/md";
import {IoMdLock} from "react-icons/io";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";


const LoginPage = () =>{

    const{register,
        handleSubmit,
        formState,
        reset} = useForm();
    const {errors} = formState;

    const useApiCall = useMutation({
        mutationKey:["POST_USER_DATA"],
        mutationFn:(payload)=>{
            return axios.post("http://localhost:8082/user/save",payload)
        },onSuccess:()=>{
            reset();
        }
    })

    const onSubmit=(value)=>{
        useApiCall.mutate(value)
    }

    return(
        <>
            <div className={"login-main-div flex w-full h-screen pt-24 px-10 pb-4"}>
                <Navbar/>
                <form className={"w-full lg:w-6/12 flex justify-center items-center flex-col -mt-28 md:-mt-6"} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={"text-3xl font-bold mb-1 flex"}>Welcome to ComixNook</h1>
                    <h3>Please enter your credentials.</h3>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-14 flex items-center pl-4 pr-2"}>
                        <MdEmail style={{fontSize:"1.4rem",marginRight:"0.5rem",color:"gray"}}/>
                        <input type={"email"} placeholder={"Email"} className={"w-full outline-none appearance-none"} {...register("email",{required:"Email is required"})}/>
                    </div>
                    <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.email?.message}</h6>
                    <div className={"md:w-6/12 w-11/12 h-12 border-solid border rounded-3xl border-gray-300 mt-4 flex items-center pl-4 pr-2"}>
                        <IoMdLock style={{fontSize:"1.4rem",marginRight:"0.5rem",color:"gray"}}/>
                        <input type={"password"} placeholder={"Password"} className={"w-full outline-none"} {...register("password",{required:"Password is required"})}/>
                    </div>
                    <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.password?.message}</h6>
                    <div className={"md:w-6/12 w-11/12 flex justify-end pt-3 pr-1"}>
                        <Link to={"/ForgetPassword"}><h3 className={"text-gray-500 cursor-pointer transition-all hover:text-black"}>Forgot password?</h3></Link>
                    </div>
                    <button className={"mt-8 md:w-6/12 w-11/12 rounded-3xl h-12 bg-black text-white text-lg font-normal transition duration-200 ease-in-out hover:bg-white hover:text-black hover:font-semibold border-2 border-black"} type={"submit"}>Login</button>
                    <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
                        <h3 className={"text-gray-500"}>Don't have an account? </h3>
                        <Link to={"/RegisterPage"}><h3 className={"text-purple-700 ml-1 cursor-pointer transition-all"}>Sign up</h3></Link>
                    </div>
                </form>
                <div className="lg:w-6/12 relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp13366070.jpg')", borderRadius: "15%" }}>

                </div>

            </div>
        </>
    )
}

export default LoginPage