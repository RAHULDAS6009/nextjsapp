"use server";
import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  //zod validation
  try {
    //save in the database
    const userExsist = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });
    //user exsist in the database
    if (userExsist) {
      return NextResponse.json({
        msg: "user exsist in the database",
      });
    }

    if (body.password.length < 6) {
      return NextResponse.json({
        msg: "password must be atleast six characters",
      });
    }
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
      //password must be atleast six characters
      //hash the password
    });
    return NextResponse.json({
      msg: "user saved in the database",
    });
  } catch (error) {
    //user exsist in the database or not
  }
}
