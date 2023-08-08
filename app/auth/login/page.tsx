import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import LoginForm from "@/app/auth/login/components/LoginForm";


async function Login() {
    const session = await getServerSession();

    if (session) {
        redirect("/")
    }


    return (
        <div className="flex h-screen justify-center items-center">
            <div className="sm:max-w-[425px] rounded-none border-2 border-brand-500 p-4">
                <div className="rounded-none">
                    <h2 className="text-brand-500">Akkauntga kirish</h2>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;