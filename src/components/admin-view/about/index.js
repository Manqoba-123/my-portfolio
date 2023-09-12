"use client";

import FormControls from "../form-controls";

const controls = [
    {
        name: "aboutme",
        placeholder: "Write about me",
        type: "text",
        label: "About Me",
    },
    {
        name: "noofprojects",
        placeholder: "Number of project(s)",
        type: "text",
        label: "Enter no of project(s)",
    },
    {
        name: "yearofexperience",
        placeholder: "Number of experience year(s)",
        type: "text",
        label: "Enter number of experience year(s)",
    },
    {
        name: "skills",
        placeholder: "Write your skill(s)",
        type: "text",
        label: "Skill(s)",
    }
]

export default function AdminAboutView({formData, setFormData, handleSaveData}) {
    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded
            px-8 py-6 pb-8 mb-4">
            <FormControls 
            controls={controls}
            formData={formData}
            setFormData={setFormData}/>
            <button
            onClick={()=> handleSaveData('about')}
            className="mt-[10px] border border-red-600 p-4 font-bold
            text-[16px] hover:bg-gray-200 duration-75 ease-in-out">
                Add Info
            </button>   
            </div>
        </div>
    );
}