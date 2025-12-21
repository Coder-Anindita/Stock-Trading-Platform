export default function LeftImageRightText({imageURL,productName,productDetails,tryDemo,learnMore,googlePlay,appStore}){
    return (
        <div className="container mt-5 mb-5">
            <div className="row my-5 ">
                <div className="col-lg-6 col-sm-12" >
                    <img  src={imageURL} style={{width:"80%"}}/>

                </div>
                <div className="col-lg-6 col-sm-12 pt-5 ">
                    <h1 className="fs-3 p-1">{productName}</h1>
                    <p className="fs-5">{productDetails}</p>
                    <a href={tryDemo} className="text-decoration-none py-3 pe-5">Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} className="text-decoration-none py-3 pe-5">Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <br></br>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" className="py-3 pe-3" /></a>

                    <a href={appStore}><img src="media/images/appstore-badge.svg" className="py-3 pe-3"/></a>

                </div>
            </div>
        </div>
    )
}