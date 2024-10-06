import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  //save in the database 
  

  return NextResponse.json({
    username: body.username,
    email: body.email,
    password: body.password,
  });
}
