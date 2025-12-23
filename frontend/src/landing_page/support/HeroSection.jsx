export default function HeroSection(){
    return(
        <div className="container-fluid text-white mb-5 " style={{backgroundColor:"rgb(65,126,209)"}}>
            <div className="row mx-5">
                <div className="col-lg-6 col-sm-12 px-5 py-5">
                    <h3 className="fs-5 pb-5">Support Portal</h3>
                    <p className="fs-4">Search for an answer or browser help topic to create a ticket</p>
                    <input className="my-3" type="text" style={{width:"380px" ,height:"60px",fontSize:"14px"}} placeholder="Eg:how do i activate F&O,why is my order getting rejected.."></input>
                    <div className="d-flex flex-wrap gap-2" style={{fontSize:"13px"}}>
                        <a className="text-white" href="">Track account opening</a>
                        <a className="text-white" href="">Track segemnt activation</a>

                        <a className="text-white" href="">Intraday</a>
                        <a className="text-white" href="">margins</a>
                        <a className="text-white" href="">Kite user manual</a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>





                <div className="col-lg-6 col-sm-12 px-5 py-5">
                    <h3 className="text-end pb-5"><a className="text-white " style={{fontSize:"13px"}} href="">Track Tickets</a></h3>
                    <h3 className="fs-4 pb-3">Featured</h3>
                    
                    <ol className="d-flex flex-column gap-2">
                        <li><a className="text-white" href="">Current Takeovers and Delisting-January 2024</a></li>
                        <li><a className="text-white" href="">Latest Intraday leverages-MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}