
export default function Home() {

    return (
        <div className="bg-white">
            <main className="container mx-auto p-4">
                <div className='md:w-1/2 w-full'>
                    <h1 className="md:text-4xl text-2xl  font-bold mb-4 text-blue-500">
                        Trust is in our DNA.
                    </h1>

                    <p className="mb-4">
                        Texicare is a health affiliate of Texas Mutual, who has been the
                        leading workers' compensation provider in Texas for over 30 years.
                        Texas Mutual has protected and cared for more than 76,000
                        businesses and 1.5M working Texans and their families. Creating
                        Texicare is the logical and enthusiastic - next step in their
                        commitment to build a stronger, safer, healthier Texas.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">
                        Hear from our President and CEO Meredith Duncan
                    </h2>
                </div>
                
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <video
                        src="/images/video.mp4"
                        controls
                        autoPlay

                    ></video>
                 
                </div>
            </main>
        </div>
    );
}