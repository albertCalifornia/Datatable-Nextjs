"use client";
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Link from "next/link";

export const TableDummy = () => {
  //1 - configuramos Los hooks
  const [users, setUsers] = useState([]);

  //2 - funcion para mostrar los datos con fetch
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data?.users);
      });
  }, []);

  //3 - Definimos las columns
  const columns = [
    {
      name: "id",
      label: "ID",
    },

    {
      name: "image",
      label: "PROFILE",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="pic"
            className=" w-10 h-10 rounded-full p-1 bg-slate-400"
          />
        ),
        filter: false,
      },
    },
    {
      name: "firstName",
      label: "NOMBRE",
    },
    {
      name: "lastName",
      label: "APELLIDO",
    },
    {
      name: "gender",
      label: "GENERO",
      options: {
        customBodyRender: (value) => (
          <p
            className={` capitalize  px-2 py-1 inline-block rounded-full ${
              value === "male" ? " bg-blue-300" : " bg-pink-300"
            }`}
          >
            {value}
          </p>
        ),
      },
    },
  ];

  const optionx = {
   // crear opciones personalizadas en el MUIDataTable
  };

  return (
    <div className="py-10 min-h-screen grid place-items-center">
      <div className=" w-10/12 max-w-4xl">
        <MUIDataTable
          title={"Muestra Api Dummy with Fetch"}
          data={users}
          columns={columns}
          options={optionx}
        />
      </div>
      <Link href="/" className=" bg-blue-500 p-2 rounded-full">Volver</Link>
    </div>
  );
};
