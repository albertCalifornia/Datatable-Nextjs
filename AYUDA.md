# Tutorial Muy Bueno
https://www.youtube.com/watch?v=_SPoSMmN3ZU&t=11631s

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

# GIT
# create a new repository on the command line
echo "# next-mongo-crud-antodb" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/albertCalifornia/mui-datatable-sqlite-db
git push -u origin main


# …or push an existing repository from the command line
git init
git add .
git commit -m "Nuevo component TableProd.jxs"
git branch -M main
git push -u origin main


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