import './footer.css'
import {RiInstagramFill} from "react-icons/ri";
import {FaDiscord, FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";

const Footer = () =>{
    return(
        <>
            <div className={"w-full h-60 text-white flex items-center justify-between p-10 md:gap-3 gap-2"} style={{backgroundColor:"#222222"}}>
                <div className={"footer-first md:w-44"}>
                   <ul>
                       <li>About us</li>
                       <li>About us</li>
                   </ul>
                </div>
                <div className={"flex items-center flex-col"}>
                    <h1 className={"md:text-4xl text-3xl gilroy-bold"}>Get in touch</h1>
                    <h1 className={"md:text-xl text-sm flex gilroy-semibold"}>Lots of content is waiting for you on our social pages</h1>
                    <div className={"social-icons"}>
                        <ul className={"flex"}>
                            <li><FaFacebookF /></li>
                            <li><RiInstagramFill /></li>
                            <li><FaYoutube /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaDiscord /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer