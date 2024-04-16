import React from "react";
import AboutImg from '../../img/aboutus.png'

const About = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center md:justify-between md:gap-10 lg:gap-24 items-center my-20 md:w-medium lg:w-large md:mx-auto" id="about">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={AboutImg} className="w-64 lg:w-80 mx-auto md:ml-6" />
            <div className="w-fit mx-6">
                <h1 className="font-semibold text-xl lg:text-3xl w-52 lg:w-72 mt-8 tracking-wide">Who we really are & why choose us</h1>
                <p className="my-6 leading-6 text-sm lg:text-base font-light tracking-wider text-gray-700">We are team StomaScope aiming to find a solution to quick detection of stomata under microscope view in leaves. Students, researchers and demonstrators can now use Stomascope web application on demand from anywhere without embedded desktop application.</p>
            </div>
        </section>
    )
}

export default About