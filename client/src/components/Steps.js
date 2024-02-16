import React from "react";

const Steps = () => {
    return(
        <section className="mb-20" id="steps">
            <div className="mx-auto py-8 w-96 bg-sgreen-100 rounded-2xl flex flex-col justify-center items-center">
                <h1 className="text-white font-bold text-xl tracking-wider w-48 text-center mb-6">Steps of stomata analysis</h1>
                <div className="grid grid-cols-1 gap-7">
                    <div className="bg-white w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">01</p>
                        <h1 className="mb-3 mt-6 font-bold tracking-wider">Open an Account</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">The standard chunk of Lorem Ipsum used since the 1500s is reproduced</p>
                    </div>
                    <div className="bg-white w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">02</p>
                        <h1 className="mb-3 mt-6 font-bold tracking-wider">Upload Photo or Video</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">The standard chunk of Lorem Ipsum used since the 1500s is reproduced</p>
                    </div>
                    <div className="bg-white w-80 py-8 px-6 rounded-2xl">
                        <p className="bg-sgreen-200 w-10 h-10 text-white rounded-md flex justify-center items-center text-xl">03</p>
                        <h1 className="mb-3 mt-6 font-bold tracking-wider">Get Analysed Data</h1>
                        <p className="text-xs font-light tracking-wider text-gray-700">The standard chunk of Lorem Ipsum used since the 1500s is reproduced</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps