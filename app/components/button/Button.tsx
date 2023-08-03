import Link from "next/link";

function ButtonNoticias() {
  return (
    <>
      <button
        className="px-10 py-4 
                  bg-gradient-to-r from-emerald-300 to-emerald-100 hover:bg-gradient-to-r
                hover:from-emerald-100 hover:to-emerald-300 transform
                  hover:shadow rounded-full text-emerald-900 
                  font-semibold transition-colors ease-in-out"
      >
        <Link href="/noticias"> Ver Todas las Publicaciones</Link>
      </button>
    </>
  );
}
export default ButtonNoticias;
