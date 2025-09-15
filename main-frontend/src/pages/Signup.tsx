import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signup() {
    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border w-full max-w-sm p-6 shadow-sm">
                <div className="space-y-3">
                    <Input placeholder="Username" />
                    <Input placeholder="Password" type="password" />
                    <Button variant="primary" text="Sign Up" className="w-full" />
                </div>
            </div>
        </div>
    );
}