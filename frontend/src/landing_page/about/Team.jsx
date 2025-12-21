export default function Team(){
    return (
        <div className="container ">
            <div className="row text-center ">
                <h1 className="fs-3">People</h1>

            </div>
            <div className="row m-5">
                <div className="col-lg-6 col-sm-12 text-center ">
                    <img src="media/images/nithinKamath.jpg" className="img-fluid rounded-circle p-5 " style={{width:"80%"}}/>
                    <p className="">Nithin Kamath</p>
                    <p className="text-secondary">Founder,CEO</p>
                    

                </div>
                <div className="col-lg-6 col-sm-12 pt-lg-5 px-lg-3" style={{fontSize:"1.04rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a className="text-decoration-none" href="">Homepage</a> / <a className="text-decoration-none" href="">TradingQnA</a> / <a className="text-decoration-none" href="">Twitter</a></p>

                </div>

            </div>

        </div>
    )
}