import HeroSection from "../about/HeroSection";
import Navbar from "../Navbar";
import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";
import Universe from "./Universe";

export default function ProductsPage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <LeftImageRightText/>
            <RightImageLeftText/>
            <Universe/>
            <Footer/>
        </> 
    )
}