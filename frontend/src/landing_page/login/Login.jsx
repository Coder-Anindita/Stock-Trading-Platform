import {Link} from "react-router-dom"
export default function Login(){
    return (
        <div className="container m-5 ms-5">
            
            <div className="row ms-5  ">
                
                <div className="col ms-5">
                    <form className=" ms-5 ">
                        <div className="d-flex flex-column text-center shadow p-4  " style={{width:"60%"}}>
                            <h1>Login</h1>
                            <p>Login to continue</p>

                            
                            <input className="mb-4" type="text" placeholder="Email" required></input>
                            <input className="mb-4" type="password" placeholder="Password" required></input>
                            <button className="p-2 px-4 bg-primary text-white border border-0 rounded fs-5 "  >
                                Login 
                            </button>
                            <p className="text-center fs-6 mt-3">New to Zerodha? <Link to="/signup" className="">Sign up</Link></p>
                            
                            
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}