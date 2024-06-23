"use client";
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import Link from "next/link";

export const TableAxios = () => {
  //1 - configuramos Los hooks
  const [products, setProducts] = useState([]);

  //2 - funcion para mostrar los datos con axios
  const endpoint = "https://fakestoreapi.com/products";

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data);
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
      name: "price",
      label: "PRICE",
    },
  ];
  //4 - renderizamos la datatable
  return (
    <div className=" py-10 min-h-screen grid place-items-center">
      <div className=" w-10/12 max-w-4xl">
        <MUIDataTable
          title={"Show data API Fackestoreapi with Axios"}
          data={products}
          columns={columns}
        />
      </div>
      <Link href="/" className=" bg-blue-500 p-2 rounded-full">Volver</Link>
    </div>
  );
};
