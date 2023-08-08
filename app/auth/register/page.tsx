import {getServerSession} from "next-auth";
import RegisterForm from "@/app/auth/register/components/RegisterForm";
import {redirect} from "next/navigation";

async function Register() {
    const session = await getServerSession();

    if (session) {
        redirect("/")
    }


    return (
        <div className="flex h-screen justify-center items-center">
            <div className="sm:max-w-[425px] rounded-none border-2 border-brand-500 p-4">
                <div className="rounded-none">
                    <h2 className="text-brand-500">Ro`yxatdan o`tish</h2>
                </div>
                <RegisterForm/>
            </div>
        </div>
);
}

export default Register;