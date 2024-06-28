"use client";
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Link from "next/link";

export const TableProd = () => {
  //1 - configuramos Los hooks
  const [products, setProducts] = useState([]);

  //2 - funcion para mostrar los datos con fetch
  useEffect(() => {
    fetch("http://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        console.log(data)
      });
  }, []);

  //3 - Definimos las columns
  const columns = [
    {
      name: "id",
      label: "ID",
    },

    {
      name: "images",
      label: "IMAGEN",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="pic"
            className=" w-20 h-20 rounded-full p-1 bg-slate-200"
          />
        ),
        filter: false,
      },
    },

    
    {
      name: "title",
      label: "NOMBRE",
    },
    {
      name: "description",
      label: "DESCRIPCION",
    },
    {
      name: "category",
      label: "CATEGORIA",
      options: {
        customBodyRender: (value) => (
          <p
            className={` capitalize  px-2 py-1 inline-block rounded-full ${
              value === "beauty" ? " bg-blue-300" : " bg-pink-300"
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
          title={"Api Products with Fetch"}
          data={products}
          columns={columns}
          options={optionx}
        />
      </div>
      <Link href="/" className=" bg-blue-500 p-2 rounded-full">Volver</Link>
    </div>
  );
};
