"use client";

import FormControls from "../form-controls";

const controls = [
    {
        name:"position",
        placeholder:"Your position",
        type: "text",
        label:"Enter your position",
    },
    {
        name:"company",
        placeholder:"Write company name",
        type: "text",
        label:"Enter your company name",
    },
    {
        name:"duration",
        placeholder:"Your duration",
        type: "text",
        label:"Enter your duration",
    },
    {
        name:"jobprofile",
        placeholder:"Your job profile",
        type: "text",
        label:"Enter job profile",
    }
]

export default function AdminExperienceView({formData, setFormData, handleSaveData}) {
    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded
            px-8 py-6 pb-8 mb-4">
            <FormControls 
            controls={controls}
            formData={formData}
            setFormData={setFormData}/>
            <button
            onClick={()=> handleSaveData('experience')}
            className="mt-[10px] border border-red-600 p-4 font-bold
            text-[16px] hover:bg-gray-200 duration-75 ease-in-out">
                Add Info
            </button>   
            </div>
        </div>
    );
}