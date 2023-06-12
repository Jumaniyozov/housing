import React from 'react';
import ImageSection from "@/app/house/[id]/components/ImageSection";
import HeaderSection from "@/app/house/[id]/components/HeaderSection";
import {MapPin} from "lucide-react";


const Page = () => {


    return (
        <main className="flex h-full flex-col mt-8">
            <div className="w-8/12 mx-auto h-full">
                <ImageSection/>
                <HeaderSection/>
                <div className="mt-8 border-t border-neutral-400">
                    <div className="mt-8 flex flex-col gap-10">
                        <div className="flex gap-3 items-end">
                            <MapPin className="text-gray-900/60 h-6 w-6"/>
                            <p className="font-sansNarrow text-md text-gray-900/60">Toshkent, Mirobod tumani,
                                Kosmonovtlar,
                                123A-22</p>
                        </div>
                        <div className="flex gap-3 flex-col text-lg">
                            <p className="font-sansNarrow text-gray-900/60">Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                                eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            <p className="font-sansNarrow text-gray-900/60">Nam liber tempor cum soluta nobis
                                eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
                                Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas
                                est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                                formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc
                                nobis videntur parum clari, fiant sollemnes in futurum.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-neutral-400">
                    <div className="mt-8 flex flex-col gap-10">
                        <div className="flex gap-3 items-end">
                            <h3 className="text-2xl uppercase">Ma`lumotnoma</h3>
                        </div>
                        <div className="gap-3 text-md grid grid-cols-3">
                            <p className="text-gray-900/60 font-sansNarrow">Property ID: 4142123</p>
                            <p className="text-gray-900/60 font-sansNarrow">Vanna: 2</p>
                            <p className="text-gray-900/60 font-sansNarrow">Umumiy maydoni: 6 sotik</p>
                            <p className="text-gray-900/60 font-sansNarrow">Garaj: 1</p>
                            <p className="text-gray-900/60 font-sansNarrow">Xonalar: 6</p>
                            <p className="text-gray-900/60 font-sansNarrow">Qurilgan yili: 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;