"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="relative mb-8">
            <div className="absolute inset-0 opacity-75 z-10" />
            <div className="relative flex items-center justify-center md:min-h-96  z-20">
                <Image
                    src="/images/bg1.jpg"
                    alt="Forklift with bags of feed"
                    width={1350}
                    height={200}
                    className="object-cover"
                    priority
                    onLoadingComplete={() => setShowText(true)}
                />
                <div className="absolute top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2  text-white z-30">
                    <h1 className="md:text-5xl font-bold">We know Texas.</h1>
                    <h1 className="md:text-5xl font-bold ">We know Texas small business.</h1>
                    <p className="mt-2 text-sm md:text-lg opacity-80 w-80">Texicare was created by seasoned healthcare professionals with a deep commitment to our state. We're a new company with big ambitions for Texas small business.</p>
                </div>
            </div>
        </div>
    );
}