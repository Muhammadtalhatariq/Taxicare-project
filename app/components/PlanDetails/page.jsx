"use client"
import { useState } from "react";

export default function page() {


    return (
        <>
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center flex-wrap ">
                    <div className="flex flex-col items-center justify-center px-20 pb-6 md:pb-0">
                        <div className="rounded-full bg-amber-600 p-6 text-white text-center font-semibold md:text-xl text-sm">
                            <div>ESSENTIAL</div> <div className="md:text-6xl text-4xl">care</div>

                        </div>
                        <h2 className="mt-2 text-center text-2xl text-amber-600 font-bold">Affordable <br /> coverage for <br /> basic care</h2>
                        <div className="mt-4 text-center">
                            <button
                                className="px-8 py-3 rounded-full bg-amber-600 text-white font-bold hover:bg-orange-600"
                            >
                                PLAN DETAILS
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col">
                        <div>
                            <h3 className="text-xl text-amber-600 font-bold">Who Benefits Most:</h3>
                            <ul className="mt-4 list-disc list-inside">
                                <li>People who want access to affordable care</li>
                                <li>People who want to avoid high out-of-pocket costs</li>
                                <li>People with young families</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl text-amber-600  font-bold mt-4">Coverage includes:</h3>
                            <ul className=" list-disc list-inside">
                                <li>$0 for the first four visits to each:</li>
                                <div className="pl-4">
                                    <li>Primary Care</li>
                                    <li>Specialists</li>
                                    <li>Mental Health</li>
                                    <li>Retail Clinic</li>
                                    <li>Urgent Care</li>
                                    <li>Habilitative/Rehabilitative Therapies</li>
                                </div>
                                <li>$5 for common prescriptions</li>
                                <li>$0 common maintenance labs</li>
                                <li>$0 virtual care through CirrusMD</li>
                                <li>Interest-free, flexible payment options through TempoPay</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}