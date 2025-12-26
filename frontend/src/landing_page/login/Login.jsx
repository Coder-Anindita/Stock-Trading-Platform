import {Link} from "react-router-dom"
import {useState} from "react"
export default function Login(){
    const [inputValues,setInputValues]=useState({
        email:"",
        password:""
    })
    const [errorMessage,setErrorMessage]=useState("")
    const handleOnChange=(e)=>{
        setInputValues({...inputValues,[e.target.name]:e.target.value})
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        setErrorMessage("")
        try{
            const res=await fetch("http://localhost:3000/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",

                },
                credentials:"include",
                body:JSON.stringify(inputValues)
            });
            const data=await res.json();
            if(res.ok){
                //navigate("/dashboard")
            }
            else{
                setErrorMessage(data.message || "Login failed");
            }

        }
        catch(err){
            setError("Server not responding. Try again.");

        }

    }
    return (
        <div className="container m-5 ms-5">
            
            <div className="row ms-5  ">
                
                <div className="col ms-5">
                    <form className=" ms-5 " onSubmit={handleOnSubmit} >
                        <div className="d-flex flex-column text-center shadow p-4  " style={{width:"60%"}}>
                            <h1>Login</h1>
                            <p>Login to continue</p>

                            
                            <input className="mb-4" type="text" placeholder="Email" required name="email" value={inputValues.email} onChange={handleOnChange}></input>
                            <input className="mb-4" type="password" placeholder="Password" required name="password" value={inputValues.password} onChange={handleOnChange}></input>
                            <button className="p-2 px-4 bg-primary text-white border border-0 rounded fs-5 " type="submit" >
                                Login 
                            </button>
                            <p className="text-center fs-6 mt-3">New to Zerodha? <Link to="/signup" className="">Sign up</Link></p>
                            <p className="text-center fs-6 mt-3" style={{color:"red"}}>{errorMessage}</p>
                            
                            
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}