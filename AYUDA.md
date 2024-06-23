# INSTALAR NEXT JS
npx create-next-app@latest

# INSTALAR NPM MUI-DATATABLES
    npm install mui-datatables --save

* Si su proyecto aún no los usa, necesita instalar mui v5 y su paquete de íconos:
    npm --save install @mui/material @emotion/react @emotion/styled @mui/icons-material

** NO [npm install @mui/material @mui/styled-engine-sc styled-components]


# INSTALAR PRISMA
npm install prisma --save-dev

# INICIALISAR PRISMA
npx prisma init --datasource-provider sqlite
(npm install @prisma/client)

* Crear el Schema primero y luego hacer Migrate *
# PRISMA MIGRATE
npx prisma migrate dev --name init1

# VER BASES DE DATOS
npx prisma studio

# Rutas con id.(params)
export const GET = async (req, {params}) => {
  return NextResponse.json("Obteniendo tarea " + params.id)
}

export const PUT = async (req, {params}) => {
    return NextResponse.json("Modificando tarea " + params.id)
}

export const DELETE = async (req, {params}) => {
    return NextResponse.json("Borrando tarea " + params.id)
}