"use client"
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="md:min-h-screen h-60 w-full md:w-full flex justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/bg.avif')`
                }}>
                <div className=" hidden md:block container mx-auto p-4 text-center md:w-[70%] ">
                    <h1 className="md:text-7xl font-bold mb-4 text-white">Your business is only as healthy as the people in it.</h1>
                    <button className="bg-red-600 border-2 rounded-full border-red-400 duration-200 hover:bg-white hover:text-black  text-white font-bold py-2 px-5 " >
                        FIND AN AGENT
                    </button>
                    <p className="text-white mt-4 px-12 text-lg font-bold">Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.</p>
                </div>
            </div>
            <div className="block md:hidden container p-4 px-8 text-start w-full ">
                <h1 className="text-5xl font-semibold mb-4 text-black">Your business is only as healthy as the people in it.</h1>
                <p className="text-black mt-4 text-xl font-normal">Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.</p>
              <div className='flex items-center justify-center pt-4'>
              <button className="bg-red-600 border-2 rounded-full border-red-400 duration-200 hover:bg-white hover:text-black  text-white font-bold py-2 px-8 " >
                    FIND AN AGENT
                </button>
              </div>
            </div>
        </>

    )
}