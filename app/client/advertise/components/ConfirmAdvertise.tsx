"use client";

import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import { useRouter} from "next/navigation";


const ConfirmAdvertise = () => {
    const {toast} = useToast();
    const router = useRouter();
    // const [isSetRedirect, setIsSetRedirect] = useState<boolean>(false);

    const handleClick = () => {

        toast({
            title: "Xizmatlar",
            description: "Xizmatlar muvaffaqiyatli tanlandi."
        })

        router.push("/client");
    };

    // useEffect(() => {
    //     if (isSetRedirect) {
    //         setTimeout(() => {
    //             redirect("/client");
    //         }, 3000);
    //     }
    // }, [isSetRedirect]);

    return (
        <div className="p-4">
            <Button onClick={handleClick} className="bg-brand-500">Tasdiqlash</Button>
        </div>
    );
};

export default ConfirmAdvertise;