'use client'

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectsView from "@/components/admin-view/projects";
import { useState } from "react";

const initialHomeFormData = {
        heading: '',
        summary: ''
    }
const initialAboutFormData = {
        aboutme: '',
        noofprojects: '',
        yearofexperience: '',
        skills:''
    }
const initialEducationFormData = {
        degree: '',
        year: '',
        highschool: '',
    }
const initialExperienceFormData = {
    position: '',
    company: '',
    duration: '',
    jobprofile:''
    }
const initialProjectsFormData = {
    name: '',
    technologies:'',
    website: '',
    github: '',
    }

export default function AdminView(){

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
    const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
    const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData);
    const [projectsViewFormData, setProjectsViewFormData] = useState(initialProjectsFormData);

    const navBarItems = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView 
            formData={homeViewFormData} setFormData={setHomeViewFormData}/>,
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView 
            formData={aboutViewFormData} setFormData={setAboutViewFormData}/>,
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView 
            formData={experienceViewFormData} setFormData={setExperienceViewFormData}/>,
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView 
            formData={educationViewFormData} setFormData={setEducationViewFormData}/>,
        },
        {
            id: 'projects',
            label: 'Projects',
            component: <AdminProjectsView 
            formData={projectsViewFormData} setFormData={setProjectsViewFormData}/>,
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView />,
        }
    ]

    return (
    <div className="border-b border-gray-200">
        <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
            {
                navBarItems.map((item) =>(
                    <button
                    key={item.id}
                    type="button"
                    className="p-4 font-bold text-xl text-black hover:scale-105
                      border-emerald-950 ease-out duration-200
                     hover:text-gray-600 focus:text-gray-600
                      focus:border-b-2"
                     onClick={() => {
                        setCurrentSelectedTab(item.id)
                     }}>
                        {item.label}
                    </button>
                ))
            }
        </nav>
        <div className="mt-10 p-10">
            {
                navBarItems.map(item=> item.id === currentSelectedTab && item.component)
            }
        </div>
    </div>
    );

}