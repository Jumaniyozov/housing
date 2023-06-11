import {GeneralMap} from "@/components/map/GeneralMap";
import Filters from "@/app/(main)/components/Filters";
import Footer from "@/app/(main)/components/Footer";

export default function Home() {
    return (
        <main className="flex h-full flex-col">
            <div className="w-full xl:h-[480px]">
                <GeneralMap/>
            </div>
            <div className="w-8/12 mx-auto h-full">
                <Filters/>
            </div>
            <div className="bg-brandDark-900 w-full h-96 mt-12">
                <div className="w-8/12 mx-auto h-full">
                    <Footer/>
                </div>
            </div>
        </main>
    )
}
