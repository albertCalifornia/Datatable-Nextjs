"use client";
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import Link from 'next/link'

export const DbAxios = () => {
  //1 - configuramos Los hooks
  const [products, setProducts] = useState([]);

  //2 - funcion para mostrar los datos con axios
  const endpoint = "http://localhost:3000/api/tarea/";
 
  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data); // en el navegador
      setProducts(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //3 - Definimos las columns
  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "title",
      label: "TITLE",
    },
    {
      name: "description",
      label: "DESCRIPCION",
    },
  ];

  const optionx = {
    elevation: 0,
  };
  //4 - renderizamos la datatable
  return (
    <div className="py-10 min-h-screen grid place-items-center">
      <div className=" w-10/12 max-w-4xl">
        <MUIDataTable
          title={"DataBase sqlite 👮🏼‍♂️ with Axios"}
          data={products}
          columns={columns}
          options={optionx}
        />
      </div>
      <Link href="/" className=" bg-blue-500 p-2 rounded-full">Volver</Link>
    </div>
  );
};
