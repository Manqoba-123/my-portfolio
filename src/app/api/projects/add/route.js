import connectToDatabase from "@/database";
import Projects from "@/models/Projects";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req){
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const saveData = await Projects.create(extractData);

        if(saveData) {
            return NextResponse.json({
                success : true,
                message : "Data connected"
            });
        }
        else{
            return NextResponse.json({
                success: false,
                message : 'Something went wrong try again!!'
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message : 'Something went wrong try again!!'
        });
    }
}