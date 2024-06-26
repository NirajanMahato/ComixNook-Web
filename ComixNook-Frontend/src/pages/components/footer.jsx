import './footer.css'
import {RiInstagramFill} from "react-icons/ri";
import {FaDiscord, FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import playStore from "../../../public/Logos/app-store-png-logo-33123.png";

const Footer = () =>{
    return(
        <>
            <div className={"w-full md:h-60 h-36 text-white flex items-center justify-between md:px-10 px-3"} style={{backgroundColor:"#222222"}}>
                <div className={"flex items-center flex-col"}>
                    <h1 className={"md:text-4xl text-2xl gilroy-bold"} contentEditable={"true"}>Get in touch</h1>
                    <h1 className={"md:text-xl hidden md:flex gilroy-semibold"}>Lots of content is waiting for you on our social pages</h1>
                    <div className={"social-icons"}>
                        <ul className={"flex"}>
                            <a href={"https://www.facebook.com/nirajan.1224"} target={"_blank"} rel={"noreferrer"}><li><FaFacebookF /></li></a>
                            <a href={"https://www.instagram.com/nirajan__mahato/"} target={"_blank"} rel={"noreferrer"}><li><RiInstagramFill /></li></a>
                            <a href={"https://www.youtube.com/channel/UCyaStskMQyOdqz3SlQLBVew"} target={"_blank"} rel={"noreferrer"}><li><FaYoutube /></li></a>
                            <a href={"https://www.linkedin.com/in/nirajan-mahato-898b90285/"} target={"_blank"} rel={"noreferrer"}><li><FaLinkedinIn /></li></a>
                            <a href={"https://discord.com/"} target={"_blank"} rel={"noreferrer"}><li><FaDiscord /></li></a>
                        </ul>
                    </div>
                </div>
                <div className={"footer-first md:w-72 w-36 text-xs md:text-base flex justify-around gilroy-medium cursor-pointer li-hover"}>
                    <ul className={"gap-2 flex flex-col"}>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className={"gap-2 flex flex-col"}>
                        <li>Contact us</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className={"md:w-40 w-3/12"}>
                    <a href={"https://play.google.com/store/apps/category/COMICS?hl=en&gl=US&pli=1"} target={"_blank"} rel="noopener noreferrer">
                        <img src={playStore} alt={"playstore"} className={"md:w-40 w-32 cursor-pointer"}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer