import './footer.css'
import {RiInstagramFill} from "react-icons/ri";
import {FaDiscord, FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import playStrore from "../../../public/Logos/app-store-png-logo-33123.png";

const Footer = () =>{
    return(
        <>
            <div className={"w-full h-60 text-white flex items-center justify-between px-10"} style={{backgroundColor:"#222222"}}>
                <div className={"flex items-center flex-col"}>
                    <h1 className={"md:text-4xl text-3xl gilroy-bold"}>Get in touch</h1>
                    <h1 className={"md:text-xl hidden md:flex gilroy-semibold"}>Lots of content is waiting for you on our social pages</h1>
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
                <div className={"footer-first md:w-72 w-36 text-xs md:text-base flex justify-around gilroy-medium cursor-pointer li-hover"}>
                    <ul className={"gap-2 flex flex-col"}>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className={"gap-2 flex flex-col"}>
                        <li>About us</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className={""}>
                    <a href={"https://play.google.com/store/apps/category/COMICS?hl=en&gl=US&pli=1"} target={"_blank"} rel="noopener noreferrer">
                        <img src={playStrore} alt={"playstore"} className={"md:w-40 w-32 cursor-pointer"}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer