"use client"
import { useRouter } from "next/navigation";
// Funcion principal del Formulario Ingreso de datos
const NewPage = () => {
    const router = useRouter()

// Funcion de Submit para el Formulario **
    const onSubmitEnvio = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;

        const respuestaFetch = await fetch("api/tarea", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await respuestaFetch.json();
        console.log(data);
        router.push("/")
    }

// Interface de usuarios **    
    return (
        <div className=" h-screen flex justify-center items-center">
            <form className=" bg-slate-800 p-10 w-1/2"
                onSubmit={onSubmitEnvio}
            >
                <p className=" text-center text-cyan-300 mb-4">Formulario Ingreso de datos <span className=" text-white text-2xl">🐶</span></p>

                <label htmlFor="title" className=" font-bold text-sm">
                    Titulo de la tarea
                </label>

                <input
                    id="title"
                    type="text"
                    placeholder="tarea"
                    className=" border border-gray-400 p-2 mb-4 w-full text-black"
                />

                <label htmlFor="description" className=" font-bold text-sm">
                    Descripcion Tarea
                </label>

                <textarea
                    rows="3"
                    id="description"
                    placeholder="describe tu tarea"
                    className=" border border-gray-400 p-2 mb-4 w-full text-black"
                ></textarea>

                <button className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Crear Task
                </button>
            </form>
        </div>
    )
}
export default NewPage