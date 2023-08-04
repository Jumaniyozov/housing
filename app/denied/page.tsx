import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";


const Denied = () => {


    return (
        <div>
            403 unauthorized
            <Link href={"/"}>
                <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Qaytish</Button>
            </Link>
        </div>
    );
};

export default Denied;