import React from "react";
import Poster from '../img/home.png'

const HeroSection = () => {
    return(
        <section className="flex flex-col justify-center items-center my-8" id="home">
            <img src={Poster} className="w-52"/>
            <div className="w-96 my-6">
                <div className="font-bold text-3xl tracking-wide">
                    <h1>Detect stomata from leaf image and video</h1>
                </div>
                <p className="my-6 leading-6 text-sm font-light tracking-wider text-gray-700">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className="bg-sgreen-100 text-white py-4 px-6 rounded-xl">Explore <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>
    )
}

export default HeroSection