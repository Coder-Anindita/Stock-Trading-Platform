import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Stats from "./Stats";

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    )
}