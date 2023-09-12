"use client";

import FormControls from "../form-controls";

const controls = [
    {
        name:"degree",
        placeholder:"Write your degree name",
        type:"text",
        label:"Enter your degree name",
    },
    {
        name:"year",
        placeholder:"Year",
        type:"text",
        label:"Year",
    },
    {
        name:"highschool",
        placeholder:"Last high school attended",
        type:"text",
        label:"Enter your high school name",
    },
    {
        name:"year",
        placeholder:"Year",
        type:"text",
        label:"Year",
    }
]

export default function AdminEducationView({formData, setFormData}) {
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