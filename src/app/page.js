import Link from "next/link";
import Card from "./Card";

export default function Home() {
  return (
    <>
    <main className="bg-black h-screen">
      <div className=" md:flex grid grid-cols-1 px-8 md:px-14 justify-between h-full w-full md:py-20">
        <div className="md:w-1/3 mt-10 h-full">
          <h1 className="text-4xl md:mt-24 mt-10 text-center md:text-left font-bold text-white ">Organize your tasks  here</h1>

          <button className="bg-pink-500 md:block hidden text-white py-3 px-3 rounded-md mt-5">Create Account</button>
        </div>
        <div className="md:w-1/3 md:h-full">
          <img className="md:h-96 md:w-96 w-64 mx-auto h-64 rounded-full object-cover" src="https://img.freepik.com/free-photo/irritated-puzzled-ethnic-female-engineer-holds-paper-raises-hand-has-displeased-face-expression-works-office-prepares-project-work_273609-50284.jpg?w=740" alt="" />
          <button className="bg-pink-500 md:hidden block w-52 text-center mx-auto text-white py-3 px-3 rounded-md mt-5">
            <Link href="Create"> 
            Create Account
            </Link>
            </button> 
        </div>
      </div>
    </main>
        <Card/>
    </>
  );
}
