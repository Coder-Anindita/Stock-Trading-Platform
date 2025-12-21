export default function RightImageLeftText({imageURL,productName,productDetails,learnMore}){
    return (
        <div className="container mt-5 mb-5">
            <div className="row  my-5">
                
                <div className="col-lg-6 col-sm-12 pt-5 ">
                    <h1 className="fs-3 p-1">{productName}</h1>
                    <p className="fs-5">{productDetails}</p>
                    
                    <a href={learnMore} className="text-decoration-none py-3 pe-5">Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className="col-lg-6 col-sm-12" >
                    <img  src={imageURL} style={{width:"80%"}}/>

                </div>
            </div>
        </div>
    )
}