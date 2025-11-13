import { PlusIcon } from "../icons/PlusIcon";

export function Card(){
    return <div>
        <div className="border-gray-200 border-2 max-w-72 p-2 rounded text-gray-500"> 
            <div className="flex items-center justify-between content-between">
                <div className="flex pr-2 mr-4">
                    <PlusIcon/>
                    Youtube Link
                </div>
                <div className="flex pr-2">
                    <PlusIcon/>
                    <PlusIcon/>
                </div>
            </div>
            <div className="w-full">
                <iframe  src="https://www.youtube.com/embed/iULv9MnNkVU?si=7Qn8u_HwQ9JYTEP8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>
}