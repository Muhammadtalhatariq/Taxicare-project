"use client"
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function page () {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center md:items-start md:justify-start flex-wrap md:flex-nowrap  md:gap-2 w-full">
                    <div className="flex flex-col md:items-start justify-center items-center md:w-[35%] w-full md:pl-[43px]">
                        <div className='flex items-center gap-2'>
                            <Image src="/images/logo.png" alt="TexiCare Logo" width={50} height={50} />
                            <div className="logo text-4xl font-semibold text-blue-500"> tex<span className='text-red-500'>i</span>care</div>
                        </div>
                        <p className="md:mt-28 mt-4 px-4 md:px-0 text-center tracking-tight text-sm">
                            2500 Bee Cave Rd, Bldg. 1, Suite 250, Austin, TX 78746-5869
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col md:w-[20%] w-full pt-6 md:pt-0">
                        <ul className="list-none text-center md:text-start">
                            <li>
                                <Link href="/about-us">
                                    <p className='font-bold'>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/plans">
                                    <p className='font-bold'>Plans</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents">
                                    <p className='font-bold'>Agents</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/employers">
                                    <p className='font-bold'>Employers</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/members">
                                    <p className='font-bold'>Members</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/providers">
                                    <p className='font-bold'>Providers</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center pl-4 md:pl-0 flex-col md:w-[20%] w-full ">
                        <ul className="list-none text-center md:text-start">
                            <li>
                                <Link href="/careers">
                                    <p className='font-bold'>Careers</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/newsroom">
                                    <p className='font-bold'>Newsroom</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy">
                                    <p className='font-bold'>Privacy Policy</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                  <div className="flex justify-center md:justify-start items-center md:items-end md:pt-32 pt-6 md:w-[20%] w-full">
                  <div className=" text-center flex justify-center items-center bg-blue-600 hover:bg-blue-500 duration-200 size-12  rounded-full">
                    <LinkedInIcon />
                </div>
                  </div>
                </div>
               
            </div>
        </footer>
    );
}