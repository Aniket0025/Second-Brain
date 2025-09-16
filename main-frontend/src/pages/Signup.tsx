import axios from "axios";
import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";




export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


     async function Signup() {
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
       await axios.post(BACKEND_URL + "/api/v1/signup" , {
        data: {
            username,
            password
        }
       })

       alert("You hava Signed up!")
    }


    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border w-full max-w-sm p-6 shadow-sm">
                <div className="space-y-3">
                    <Input ref={usernameRef} placeholder="Username" />
                    <Input ref={passwordRef} placeholder="Password" />
                    <Button onClick={Signup} variant="primary" text="Sign Up" className="w-full" />
                </div>
            </div>
        </div>
    );
}