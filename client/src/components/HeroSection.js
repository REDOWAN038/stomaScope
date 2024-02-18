import React from "react";
import Poster from '../img/home.png'
import "../css/tailwind.css"

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center my-16 lg:w-large lg:mx-auto md:mt-20 lg:mt-32" id="home">
            <img src={Poster} className="w-52 md:w-64 md:mr-8 lg:w-1/3" />
            <div className="w-fit md:w-96 mx-6 my-6 md:ml-8 lg:w-1/2">
                <div className="font-semibold text-3xl lg:text-5xl tracking-wide w-96 lg:w-full">
                    <h1 className="leading-snug">Detect stomata from leaf image and video</h1>
                </div>
                <p className="my-6 leading-6 text-sm lg:text-base font-light tracking-wider text-gray-700">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className="bg-sgreen-100 text-white py-4 px-6 rounded-xl">Explore <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>
    )
}

export default HeroSection