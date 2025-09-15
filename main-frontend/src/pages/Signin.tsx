import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin() {
    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border w-full max-w-sm p-6 shadow-sm">
                <div className="space-y-3">
                    <Input placeholder="Username" />
                    <Input placeholder="Password" type="password" />
                    <Button variant="primary" text="Sign in" className="w-full" />
                </div>
            </div>
        </div>
    );
}