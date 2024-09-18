import React from 'react'
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const navItem = [
    {
        name: "AGENT",
        path: "#AGENT"
    },
    {
        name: "MEMBER",
        path: "#MEMBER"
    },
    {
        name: "EMPLOYER",
        path: "#EMPLOYER"
    },
    {
        name: "PROVIDER",
        path: "#PROVIDER"
    },
];

const Menu = [
    {
        name: "Find A Docter",
        path: "#FINDADOCTER"
    },
    {
        name: "Plans",
        path: "#PLANS"
    },
    {
        name: "Agent",
        path: "#AGENT"
    },
    {
        name: "Employer",
        path: "#EMPLOYER"
    },
    {
        name: "Member",
        path: "#MEMBER"
    },
    {
        name: "Providers",
        path: "#PROVIDERS"
    },
    {
        name: "About Us",
        path: "#ABOUTUS"
    },
]


const page = () => {
    return (
        <>
            <div className='md:pl-20 md:pr-6 w-full h-32 md:h-16 flex flex-col md:flex-row justify-between items-center' >
                <div className='flex md:items-center md:justify-center gap-2 mt-6 md:mt-0'>
                    <Image src="/images/logo.png" alt="TexiCare Logo" width={50} height={50} />
                    <div className="logo text-5xl md:text-4xl font-semibold text-blue-500"> tex<span className='text-red-500'>i</span>care</div>
                </div>
                <div className="navbar hidden md:flex justify-center items-center">
                    <nav className="">
                        <ul className="flex space-x-6">
                            <li className='hover:border-b-4 border-red-600 ease-in-out '>
                                <a href="#" className="text-gray-600 font-semibold">
                                    Find A Doctor
                                </a>
                            </li>
                            <li className='hover:border-b-4 border-red-600 ease-in-out '>
                                <a href="#" className="text-gray-600 font-semibold">
                                    Plans
                                </a>
                            </li>
                            <li className='hover:border-b-4 border-red-600 ease-in-out'>
                                <a href="#" className="text-gray-600 font-semibold">
                                    Agents
                                </a>
                            </li>
                            <li className='hover:border-b-4 border-red-600 ease-in-out'>
                                <a href="#" className="text-gray-600 font-semibold">
                                    Employers
                                </a>
                            </li >
                            <li className=" group relative cursor-pointer hover:border-b-4 border-red-600 ease-in-out">
                                <a className="flex text-gray-500 items-center gap-2 font-semibold" href="/">
                                    Member
                                    <span>
                                        {" "}
                                        <KeyboardArrowDownIcon />
                                    </span>
                                </a>
                                <div className="hidden group-hover:block z-999 absolute w-40 rounded-md">
                                    <ul className=" text-black  bg-white py-2 ">
                                        <li >
                                            <a
                                                className="hover:bg-secondary/20  inline-block transition-all duration-200 w-full px-2"
                                                href="#"
                                            >
                                                <p className='font-semibold'>free vocation care</p>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li className='hover:border-b-4 border-red-600  ease-in-out'>
                                <a href="#" className="text-gray-600 font-semibold">
                                    Providers
                                </a>
                            </li>
                            <li className='hover:border-b-4 border-red-600 ease-in-out'>
                                <a href="#" className="text-gray-600 font-semibold ">
                                    About Us
                                </a>
                            </li>
                            <li className=" group relative cursor-pointer hover:border-b-4 border-red-600 ease-in-out">
                                <a className="flex items-center gap-1 font-semibold text-red-600" >
                                    SIGN IN
                                    <span>
                                        {" "}
                                        <KeyboardArrowDownIcon />
                                    </span>
                                </a>
                                <div className="hidden group-hover:block z-999 absolute rounded-md pt-6">
                                    <ul className=" text-black bg-white py-2 ">
                                        {navItem.map((item) => (
                                            <li className=' '>
                                                <a
                                                    className="hover:bg-red-600 hover:text-white p-2 inline-block transition-all duration-200 w-full px-2"
                                                    href={item.path}
                                                >
                                                    <p className='font-bold'>{item.name}</p>
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className='mobile md:hidden flex gap-12'>
                    <nav className="">
                        <ul>
                            <li className=" group relative cursor-pointer hover:border-b-4 border-red-600 ease-in-out pb-2">
                                <a className="flex items-center gap-1 font-semibold text-black" >
                                    MENU
                                    <span>
                                        {" "}
                                        <KeyboardArrowDownIcon />
                                    </span>
                                </a>
                                <div className="hidden group-hover:block z-999 absolute rounded-md pt-3">
                                    <ul className=" text-black bg-white py-2 ">
                                        {Menu.map((item) => (
                                            <li className=' '>
                                                <a
                                                    className="hover:bg-red-600 hover:text-white p-2 inline-block transition-all duration-200 text-center w-32 px-2"
                                                    href={item.path}
                                                >
                                                    <p className='font-bold text-sm tracking-tight'>{item.name}</p>
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <nav className="">
                        <ul>
                            <li className=" group relative cursor-pointer hover:border-b-4 border-red-600 ease-in-out pb-2">
                                <a className="flex items-center gap-1 font-semibold text-red-600" >
                                    SIGN IN
                                    <span>
                                        {" "}
                                        <KeyboardArrowDownIcon />
                                    </span>
                                </a>
                                <div className="hidden group-hover:block z-999 absolute rounded-md pt-3">
                                    <ul className=" text-black bg-white py-2 ">
                                        {navItem.map((item) => (
                                            <li className=' '>
                                                <a
                                                    className="hover:bg-red-600 hover:text-white p-2 inline-block transition-all duration-200 w-full px-2"
                                                    href={item.path}
                                                >
                                                    <p className='font-bold'>{item.name}</p>
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </>
    )
}

export default page