

export default function Home() {
    return (
        <div className='bg-white py-12'>
            <div className="container mx-auto px-4 ">
                <div className="flex justify-center flex-wrap">
                    <div className="flex md:pl-44 flex-col items-center justify-center px-20 pb-6 md:pb-0">
                        <div className="rounded-full bg-blue-900 p-6 text-white text-center font-bold text-sm">
                            <div>SAVING</div> <div><span className="md:text-6xl text-4xl">care</span></div>
                        </div>
                        <h2 className="text-2xl font-bold mt-8 text-blue-900 text-center">Allows tax-free <br /> contributions <br /> into an HSA</h2>
                        <button className="bg-blue-900 px-6 hover:bg-blue-800 text-white font-bold py-2 px- rounded-full mt-4">
                            PLAN DETAILS
                        </button>
                    </div>
                    <div className="flex flex-col justify-center md:pt-8">
                        <h2 className="text-xl font-bold mb-4 text-blue-900">Who Benefits Most:</h2>
                        <ul className="list-disc ml-6">
                            <li>People who want to shop for the highest quality care at the lowest price</li>
                            <li>People who want lower monthly premiums</li>
                            <li>People who want a tax-advantaged Health Savings Account</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-blue-900">Coverage includes:</h2>
                        <ul className="list-disc ml-6">
                            <li>$0 virtual care through CirrusMD</li>
                            <li>Deductibles and out-of-pocket maximums that comply with IRS guidelines</li>
                            <li>Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}