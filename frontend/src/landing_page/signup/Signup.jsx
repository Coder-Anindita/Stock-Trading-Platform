import {Link,useNavigate} from "react-router-dom"
import { useState } from "react"
export default function Signup(){
    const navigate = useNavigate();
    let [inputValues ,setInputValues]=useState({
        username:"",
        password:"",
        email:"",
    })
    const [errorMessage,setErrorMessage]=useState("")
    const handleChange=(e)=>{
        setInputValues({...inputValues,[e.target.name]:e.target.value})
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        setErrorMessage("")
        try{
            const res=await fetch("http://localhost:3000/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",

                },
                credentials:"include",
                body:JSON.stringify(inputValues)
            });
            const data=await res.json();
            if (res.ok) {
                window.location.href = "http://localhost:5174/dashboard";
            }   
            else{
                setErrorMessage(data.message || "Signup failed");
            }

        }
        catch(err){
            setError("Server not responding. Try again.");

        }

    }
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
                    <form onSubmit={handleOnSubmit}>
                        <div className="d-flex flex-column text-center shadow p-4" >
                            <h1>Sign up</h1>
                            <p>Sign up to continue</p>

                            <input className="mb-4" type="text " placeholder="Name" required value={inputValues.username} name="username" onChange={handleChange}></input>
                            <input className="mb-4" type="text" placeholder="Email" required value={inputValues.email} name="email" onChange={handleChange}></input>
                            <input className="mb-4" type="password" placeholder="Password" required value={inputValues.password} name="password" onChange={handleChange}></input>
                            <button className="p-2 px-4 bg-primary text-white border border-0 rounded fs-5 " type="submit" >
                                Sign up 
                            </button>
                            
                            <p className="text-center fs-6 mt-3">Already have an account <Link to="/login" className="">Login</Link></p>
                            <p className="text-center fs-6 mt-3 " style={{color:"red"}}>{errorMessage}</p>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}