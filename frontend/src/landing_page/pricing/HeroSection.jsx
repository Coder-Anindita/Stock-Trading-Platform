export default function HeroSection(){
    return (
        <div className="container m-5 ">
            <div className="row">
                <div className="col">
                    <div className="row m-lg-5 ">
                        <div className="col text-center p-lg-5">
                            <h1 className="fs-3 py-1">Pricing</h1>
                            <p className="fs-5 py-1 text-muted">Free equity investment and flat ₹20 traday and F&O trades  </p>
                            

                        </div>
                    </div>

                </div>
            </div>
            <div className="row text-center mt-5 mb-5">
                <div className="col-lg-4 col-sm-12 mb-5">
                    <img src="media/images/pricing0.svg" className="img-fluid " style={{width:"70%"}}/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted fs-6 pt-2">All equality delivery investments (NSE,BSE),are absolutely free-₹0 brokerage</p>
                </div>
                <div className="col-lg-4 col-sm-12 px-lg-3">
                    <img src="media/images/intradayTrades.svg" className="img-fluid" style={{width:"70%"}}/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted fs-6 pt-2">Flat Rs.20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,currency,and community trades.</p>
                </div>
                <div className="col-lg-4 col-sm-12 mb-5">
                    <img src="media/images/pricing0.svg" className="img-fluid" style={{width:"70%"}}/>
                    <h1 className="fs-3 ">Free delivery</h1>
                    <p className="text-muted fs-6 pt-2 ">All direct mutual fund investments are absolutely free-₹0 commisions & DP charges.</p>
                </div>

            </div>
        </div>
    )
}