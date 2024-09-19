import Image from 'next/image';

export default function page() {
    return (
        <div className="container mx-auto py-12 flex flex-col md:flex-row px-12">
            <div className='md:w-1/3 w-full  pt:pt-6 pt-3'>
                <h2 className="text-3xl font-medium mb-2">Our innovative approach keeps your business going strong.</h2>
              <div className='flex items-center justify-center md:justify-start'>
              <button className="bg-amber-600 border-2 rounded-full border-amber-600 hover:bg-white hover:text-black  text-white font-bold py-2 px-4  mt-4">
                    See Our Plans
                </button>
            </div>
              </div>
            <div className="flex flex-wrap justify-center gap-10 px-10">
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full  cursor-pointer">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Affordable solutions</p>
                </div>
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full  cursor-pointer">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Quality and accessible care</p>
                </div>
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full  cursor-pointer">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Easy to use</p>
                </div>
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full  cursor-pointer ">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Transparent costs</p>
                </div>
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full cursor-pointer">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Preventative care</p>
                </div>
                <div className="relative w-48 h-48 flex flex-col items-center justify-center rounded-full cursor-pointer">
                    <Image width={100} height={100} src="/images/product.png" />
                    <p className="text-center mt-4 text-lg font-bold text-red-600">Financially stable</p>
                </div>
            </div>

        </div>
    );
}
