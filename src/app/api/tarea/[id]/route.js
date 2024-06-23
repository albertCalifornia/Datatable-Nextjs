import { NextResponse } from 'next/server'; 
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//! Consultar un registro - id ****************** 
export const GET = async (req, {params}) => {
 const id= parseInt(params.id)
 try {
  const tareaGet = await prisma.dbtask.findFirst({where: {id: id}})
  if (!tareaGet){
    return new NextResponse(`producto with ID id not found Che!!.`,
    {status: 404,}
    )}
  return NextResponse.json(tareaGet)
    
 } catch (error) {
    return NextResponse.json(`Un Registros, Fuck 😡 Error es: ${error.message}`); 
 }
}

//! Modificar un registro - id  ***************************
export const PUT = async (req, {params}) => {
   const id = parseInt(params.id)
   const body = await req.json()
   try {
      const tareaUpdate = await prisma.dbtask.update({ where: {id: id}, data: body})
      return NextResponse.json(tareaUpdate)
   } catch (error) {
      return NextResponse.json(`Un Registros, Fuck 😡 Error es: ${error.message}`); 
   }
}

//! Borrar un registro - id **************************
export const DELETE = async (req, {params}) => {
   const id = parseInt(params.id)
   try {
    const tareaDelete = await prisma.dbtask.delete({ where: {id: id}})
    return NextResponse.json(tareaDelete)
   } catch (error) {
    return NextResponse.json(`Un Registros, Fuck 😡 Error es: ${error.message}`); 
   }
}

//?  **************************************************
// export const GET = async (req, {params}) => {
//     return NextResponse.json("Obteniendo tarea " + params.id)
//   }
  
//   export const PUT = async (req, {params}) => {
//       return NextResponse.json("Modificando tarea " + params.id)
//   }
  
//   export const DELETE = async (req, {params}) => {
//       return NextResponse.json("Borrando tarea " + params.id)
//   }

