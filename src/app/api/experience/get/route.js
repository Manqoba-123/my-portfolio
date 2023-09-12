import connectToDatabase from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDatabase();
        const extractData = await Experience.find({});

        if(extractData) {
            return NextResponse.json ({
                success: true,
                data: extractData,
            });
        }
        else{
            return NextResponse.json ({
                success: false,
                message: "Something went wrong tyr again!!"
            });
        }
        
    } catch (error) {
        console.log(error);

        return NextResponse.json ({
            success: false,
            message: "Something went wrong tyr again!!"
        });
    }
}