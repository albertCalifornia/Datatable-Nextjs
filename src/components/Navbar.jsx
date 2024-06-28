import Link from 'next/link'

const Navbar = () => {
  return (
    <>

<nav className="m-8 bg-gradient-to-b from-slate-500 to-slate-800 h-20 text-white flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold">UNIX 🍎</h1>

        <div className="flex gap-8 hover:text-yellow-500">
        <Link href="/new">Data Entry</Link>
            <Link href="/dbaxio">Axios-DB</Link>
            <Link href="/tableaxio">Axios-Api</Link>
            <Link href="/tabledummy">Fetch-Dummy</Link>
            <Link href="/tableprod">F-Products</Link>
            <Link href="/about">About...</Link>
        </div>
    </nav>

    <div className="text-center text-5xl font-extrabold ...">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Data Table & Next Js 
        </span>
      </div>
    </>
  );
};
export default Navbar;
{
  /*  <Link to="/create" className='btn btn-primary mt-2 mb-2'>Add 📒 <i className="fas fa-plus"></i></Link> */
}
