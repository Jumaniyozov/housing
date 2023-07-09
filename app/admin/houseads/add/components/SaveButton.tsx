"use client";

import {Button} from "@/components/ui/button";


export const SaveButton = () => {

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <Button className="bg-brand-500 hover:bg-brand-600"
                onClick={handleClick}
        >
            Saqlash
        </Button>
    );
};
