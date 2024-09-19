
export default function page() {
    return (
        <div className="bg-white py-8">
            <main className="container mx-auto px-4">
                <div className="flex justify-center flex-wrap">
                    <div className="flex flex-col items-center justify-center px-20 pb-6 md:pb-0">
                        <div className="rounded-full bg-blue-400 p-6 text-white text-center font-bold text-sm">
                            <div>THRIVE</div> <div><span className="md:text-6xl text-4xl">care</span></div>
                        </div>
                        <h2 className="mt-2 text-center text-2xl text-blue-400 font-bold">Transparent <br /> costs with no <br /> surprises</h2>
                        <div className="mt-4 text-center">
                            <button
                                className="px-8 py-3 rounded-full bg-blue-400 text-white font-bold hover:bg-blue-600"
                            >
                                PLAN DETAILS
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:pt-8">
                        <h3 className="text-xl text-blue-400 font-bold ">Who Benefits Most:</h3>
                        <ul className="list-disc ml-4">
                            <li>People who want to know costs prior to service</li>
                        </ul>
                        <h3 className="text-xl text-blue-400  font-bold mt-4">Coverage Includes:</h3>
                        <ul className="list-disc ml-4">
                            <li>Clear, upfront costs</li>
                            <li>$0 virtual care through CirrusMD</li>
                            <li>
                                Low copays for primary care and mental health
                            </li>
                            <li>
                                Interest-free, flexible payment options through TempoPay
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}