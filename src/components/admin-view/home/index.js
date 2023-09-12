"use client";

import FormControls from "../form-controls";

const controls = [
    {
        name: 'heading',
        placeholder: 'Enter heading text',
        type: 'text',
        label: 'Enter heading text'
    },
    {
        name: 'summary',
        placeholder: 'Enter career summary',
        type: 'text',
        label: 'Enter career summary'
    }
]

export default function AdminHomeView({formData, setFormData, handleSaveData}) {
    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded
            px-8 py-6 pb-8 mb-4">
            <FormControls 
            controls={controls}
            formData={formData}
            setFormData={setFormData}/>
            <button
            onClick={()=> handleSaveData('home')}
            className="mt-[10px] border border-red-600 p-4 font-bold
            text-[16px] hover:bg-gray-200 duration-75 ease-in-out">
                Add Info
            </button>   
            </div>
        </div>
    );
}