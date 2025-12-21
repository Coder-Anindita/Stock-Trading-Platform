import HeroSection from "./HeroSection";
import Navbar from "../Navbar";
import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";
import Universe from "./Universe";

export default function ProductsPage(){
    return(
        <>
            
            <HeroSection/>
            <LeftImageRightText imageURL="media/images/kite.png" 
            productName="Kite"
            productDetails="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
            />
            <RightImageLeftText
            imageURL="media/images/kiteconnect.png"
            productDetails="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore=""
            />
            <LeftImageRightText imageURL="media/images/products-coin.png" 
            productName="Coin"
            productDetails="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
            />
            <RightImageLeftText
            imageURL="media/images/products-console.png"
            productName="Console"
            productDetails="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            />
            <LeftImageRightText imageURL="media/images/varsity.png" 
            productName="Varsity mobile"
            productDetails="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
            />
            <p className="fs-4 text-center py-3">Want to know more about our technology stack? Check out the <a href="" className="text-decoration-none">Zerodha.tech</a> blog.</p>
            
            <Universe/>
            <div className="text-center my-4">
                    <button className="p-2 px-4 bg-primary text-white border-0 rounded fs-5">
                        Sign up for free
                    </button>
            </div>
            
        </> 
    )
}