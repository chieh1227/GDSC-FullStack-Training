"use client";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function Loginpage(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const router=useRouter();

    const handleLogin = ()=>{
        if(!name||!password){
            alert("Please insert your name and password");
        }
        else{
            router.push("/todo");
        }
    }

    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-800">
            <div className="bg-white p-6 rounded min-h-8 w-full max-w-md">
                <h1 className="font-bold text-xl mb-4 text-black text-center">Todo Lists</h1>
                <div className="text-black font-bold">
                    Name
                </div>
                <input 
                type ="text"
                onChange= {(e) =>setName(e.target.value)}
                className="w-full mb-4 border-b focus:outline-none focus:border-black"
                />
                <div className="text-black font-bold">
                    Password
                </div>
                <input
                type = "password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full mb-4 border-b focus:outline-none focus:border-black"
                />
                <div className="flex justify-center">
                <button
                onClick={handleLogin}
                className="px-4 py-2 bg-black text-white rounded hover:bg-blue">
                    Login
                </button>
                </div>
                <div className="flex justify-center mt-4">
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <a href="/signup" className="text-blue-400 hover:underline">
                    Sign up
                    </a>
                </p>
                </div>
            </div>
        </div>        
    );
}

