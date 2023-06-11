
import { FaLock, FaUser } from 'react-icons/fa'

export default function Home() {
    return (
        <>
        {/* Container */}
        <div className="bg-image block h-screen items-center justify-center p-4 md:flex">
            {/* Login card */}
            <div className="bg-cover flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full">
               
                {/* form */}
                <div className="bg-white flex flex-col  items-center p-4 space-y-8 w-full md:w-1/2">
                    {/* Welcome */}
                    <div className="flex flex-col items-center">
                        <h1 className="font-medium text-blue-400 text-xl">Seja bem vindo</h1>
                        <p>Faça login utilizando seu e-mail</p>
                    </div>
                    {/* inputs */}
                    <form className="flex flex-col items-center space-y-4">
                        <div className="relative">
                            <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaUser/></span>
                            <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 
                                rounded-md transition focus:ring-2 focus:ring-blue-300" placeholder="e-mail" type="text"/>
                        </div>
                        <div className="relative">
                            <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaLock/></span>
                            <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 
                                rounded-md transition focus:ring-2 focus:ring-blue-300" placeholder="senha" type="password"/>
                        </div>
                        <button className="bg-blue-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white
                            transition hover:bg-blue-500" type="submit">
                                <FaUser className="mr-2" />
                                Entrar
                            </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}