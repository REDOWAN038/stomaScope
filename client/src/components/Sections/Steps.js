import React from "react";

const Steps = () => {
    return (
        <section className="mb-10 flex flex-col justify-center items-center" id="steps">
            <div className="mx-6 py-8 px-7 w-fit bg-sgreen-100 rounded-2xl flex flex-col justify-center items-center">
                <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl tracking-wider w-48 md:w-96 text-center mb-6">Steps of stomata analysis</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div className="bg-white max-w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">01</p>
                        <h1 className="mb-3 mt-6 font-semibold tracking-wider">Open an Account</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">At first, create an account on our website by using your email address</p>
                    </div>
                    <div className="bg-white max-w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">02</p>
                        <h1 className="mb-3 mt-6 font-semibold tracking-wider">Upload Photo or Video</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">Upload an image or video from which you want to detect stomata</p>
                    </div>
                    <div className="bg-white max-w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">03</p>
                        <h1 className="mb-3 mt-6 font-semibold tracking-wider">Get Analysed Data</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">Our advance algorithm will detect stomata from your images or videos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps