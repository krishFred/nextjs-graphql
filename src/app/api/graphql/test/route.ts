import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){

  console.log("Testing GET request");

  return NextResponse.json({ success: true, message: "Testing Get Request", statusCode: 200})
}