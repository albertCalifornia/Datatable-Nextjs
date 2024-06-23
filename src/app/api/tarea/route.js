import { NextResponse } from 'next/server'; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 // CREA UN REGISTRO - Record
 export async function POST(request) {
    const body = await request.json()
      const newTask = await prisma.dbtask.create({ data:body })
      return NextResponse.json(newTask);
  }

// MOSTRAR TODOS LOS REGISTROS
export async function GET() {
    const records = await prisma.dbtask.findMany()
    return NextResponse.json(records);
     }
     