import Input from "./Input";

export default function NewPorject(){
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end my-4 gap-4">
                <li><button className="text-stone=800 hover:text-stone-950">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 py-2 px-6 rounded-md">Save</button></li>
            </menu>
            <div>
               <Input label="Title" />
               <Input label="Description" textarea />
               <Input label="Due Date" />
            </div>
        </div>
    )
}