"use server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const body = await req.json();
  //save in the database

  return NextResponse.json({});
}
