"use server";
import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const body = await req.json();
  //save in the database
  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return NextResponse.json({
    user: user,
  });
}
