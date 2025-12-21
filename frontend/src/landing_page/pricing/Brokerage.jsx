export default function Brokerage(){
    return (
        <div className="container mt-5 border-top mb-5">
            <div className="row mt-5 mb-5">
                <div className="col-lg-7 col-sm-12 mt-5">
                    <h1 className="fs-4 text-center  pb-5 "><a className="text-decoration-none" href="">Brokrage calculator</a></h1>
                    <ul className="fs-6 text-muted">
                        <li>Call & Trade and RMS auto-squareoff: Additonal charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes,if require,shall be charged ₹20 per contract note.Courier charges apply.</li>
                        <li>For NRI account (non-PIS),0.5% or ₹100 per executed order for equity(whichever is lower). </li>
                        <li>For NRI account (PIS),0.5% or ₹200 per executed order for equlity (whichever is lower).</li>
                        <li>If the account is in debit balance ,any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>

                </div>
                <div className="col-lg-5 col-sm-12 mt-5">
                    <h1 className="fs-4 text-center text-primary"><a className="text-decoration-none" href="">List of charges</a></h1>
                    
                </div>
            </div>
        </div>
    )
}