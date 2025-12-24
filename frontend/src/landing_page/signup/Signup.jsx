import {Link} from "react-router-dom"
export default function Signup(){
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col text-center p-lg-5 ">
                    <h1 className="fs-3 py-1">Open a free demat and trading account online</h1>
                    <p className="fs-4 py-1 text-secondary">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                    
                </div>

                
            </div>
            <div className="row mx-5 mt-3">
                <div className="col-lg-6 col-sm-12 mt-5">
                    <img className="img-fluid " src="media/images/account_open.svg"/>

                </div>
                <div className="col-lg-6 col-sm-12  mt-sm-5">
                    <form>
                        <div className="d-flex flex-column text-center shadow p-4">
                            <h1>Sign up</h1>
                            <p>Sign up to continue</p>

                            <input className="mb-4" type="text " placeholder="Name" required></input>
                            <input className="mb-4" type="text" placeholder="Email" required></input>
                            <input className="mb-4" type="password" placeholder="Password" required></input>
                            <button className="p-2 px-4 bg-primary text-white border border-0 rounded fs-5 "  >
                                Sign up 
                            </button>
                            
                            <p className="text-center fs-6 mt-3">Already have an account <Link to="/login" className="">Login</Link></p>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}