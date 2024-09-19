"use client"


export default function Home() {
    return (
        <>
            <div className="md:h-[28rem] w-full h-80 flex items-center bg-cover "
                style={{
                    backgroundImage: `url('/images/bg1.jpg')`,
                 backgroundRepeat : 'no-repeat',
              

                }}>
                <div className=" container  md:w-1/2 ">
                    <p className="text-white mt-4 md:pl-40 pl-10   text-5xl  font-bold">Good health is just
                        good business.</p>
                </div>
            </div>

        </>

    )
}