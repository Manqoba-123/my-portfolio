"use client";

import FormControls from "../form-controls";

const controls = [
    {
        name:"name",
        placeholder:"Project name",
        type:"text",
        label:"Enter project name",
    },
    {
        name:"technologies",
        placeholder:"Enter tech used",
        type:"text",
        label:"Enter tech",
    },
    {
        name:"website",
        placeholder:"Enter website",
        type:"text",
        label:"Website",
    },
    {
        name:"github",
        placeholder:"Enter github project link",
        type:"text",
        label:"Github",
    }
]

export default function AdminProjectsView({formData, setFormData}) {
    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded
            px-8 py-6 pb-8 mb-4">
            <FormControls 
            controls={controls}
            formData={formData}
            setFormData={setFormData}/>
            <button
            className="mt-[10px] border border-red-600 p-4 font-bold
            text-[16px] hover:bg-gray-200 duration-75 ease-in-out">
                Add Info
            </button>   
            </div>
        </div>
    );
}