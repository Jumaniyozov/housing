import React from 'react';
import {Facebook, Instagram, Send, Twitter} from "lucide-react";

interface FooterProps {

}

const Footer = (props: FooterProps) => {
    const {} = props;

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="h-5/6 flex pt-24">
                    <div className="w-6/12 flex flex-col gap-4">
                        <h3 className="text-white text-5xl tracking-wide">KONTAKTLAR</h3>
                        <p className="text-white/70 font-sansNarrow">Maslahat olish uchun biz bilan bog`laning.
                            Mutaxassislarimiz barcha savollaringizga javob berishdan xursand bo`lishadi.</p>
                    </div>
                    <div className="w-3/12 flex flex-col gap-4">
                        <h3 className="text-white text-2xl tracking-wide">Housing</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-white/70 font-sansNarrow">Toshkent</p>
                            <p className="text-white/70 font-sansNarrow">Navoiy ko`chasi, 421</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-brand-500 hover:bg-brand-700 p-2">
                                <Facebook className="text-white"/>
                            </div>
                            <div className="bg-brand-500 hover:bg-brand-700 p-2">
                                <Send className="text-white"/>
                            </div>
                            <div className="bg-brand-500 hover:bg-brand-700 p-2">
                                <Instagram className="text-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12 flex flex-col gap-4">
                        <h3 className="text-white text-2xl tracking-wide">Biz bilan bog`laning</h3>
                        <div className="flex flex-col gap-3">
                            <p className="text-white underline text-lg font-sansNarrow">housing@mail.com</p>
                            <p className="text-white font-sansNarrow text-xl">+998 (90) 123-45-67</p>
                        </div>
                    </div>
                </div>
                <div className="justify-end h-1/6 border-t flex">
                    <p className="text-white text-end mt-2">Housing © {new Date().getFullYear()}. Barcha xizmatlar
                        litsenziyalangan.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;