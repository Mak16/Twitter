/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from "react-router-dom";
import Btn from "./Btn";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:9000/login",{
      email,
      password
    })
    .then((response)=>{
      console.log(response)
      if(response.data === "success"){
        Navigate('/')
      }
    })
    .catch((error)=>console.log(error));
  }

  return (
    <div className="">
      <div className="grid grid-cols-2 w-[70%] m-auto gap-40 py-40">
        <Link to="/" className="">
          <svg className="fill-blue-500"
            width="480"
            height="480"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.643 4.937C22.808 5.307 21.911 5.557 20.968 5.67C21.93 5.094 22.668 4.18 23.016 3.092C22.116 3.626 21.119 4.014 20.058 4.222C19.208 3.318 17.998 2.752 16.658 2.752C14.086 2.752 12 4.838 12 7.412C12 7.776 12.042 8.13 12.12 8.472C8.24701 8.277 4.81601 6.422 2.51801 3.604C2.11801 4.294 1.88801 5.094 1.88801 5.946C1.88801 7.562 2.71101 8.989 3.96001 9.824C3.19601 9.799 2.47801 9.59 1.85001 9.241V9.301C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.952C21.332 7.752 21.327 7.55 21.318 7.35C22.228 6.692 23.018 5.873 23.641 4.94L23.643 4.937Z"
              
            />
          </svg>
        </Link>
        <div>
        <h1 className="text-white text-7xl text-bold">
          ça se passe <br /> maintenant
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <h2>Inscrivez-vous.</h2>

          <label className="text-white text-2xl mt-5" htmlFor="email">
            Email
          </label>
          <input
           className="bg-white w-full rounded-[40px] h-[4rem] mt-3 pl-5" 
           type="email" 
           onChange={(e)=>setEmail(e.target.value)} />
          <label className="text-white text-2xl mt-5" htmlFor="password">
            Password
          </label>
          <input
           className="bg-white w-full h-[4rem] rounded-[40px] mt-3 pl-5" 
           type="text"
           onChange={(e)=>setPassword(e.target.value)} />

          <Btn btnClass="text-white text-3xl bg-blue-500  w-full px-8 py-3 mt-10 rounded-[40px]">
            Se connecter
          </Btn>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
