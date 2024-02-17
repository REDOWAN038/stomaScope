import React from "react";
import AboutImg from '../img/about.png'
import { CheckBox } from "@material-ui/icons";

const About = () => {
    return(
        <section className="flex flex-col justify-center items-center my-20" id="about">
            <img src={AboutImg} className="w-64 mx-auto"/>
            <div className="w-96">
                <h1 className="font-bold text-xl w-52 mt-8 tracking-wide">Who we really are & why choose us</h1>
                <p className="my-6 leading-6 text-sm font-light tracking-wider text-gray-700">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <ul className="text-sm font-light tracking-wider text-gray-700 flex flex-col gap-3">
                    <li className="flex items-center gap-2"><CheckBox className="text-sgreen-100" style={{fontSize: '1.2rem'}}/>We always deliver on time.</li>
                    <li className="flex items-center gap-2"><CheckBox className="text-sgreen-100" style={{fontSize: '1.2rem'}}/>We always deliver on time.</li>
                    <li className="flex items-center gap-2"><CheckBox className="text-sgreen-100" style={{fontSize: '1.2rem'}}/>We always deliver on time.</li>
                    <li className="flex items-center gap-2"><CheckBox className="text-sgreen-100" style={{fontSize: '1.2rem'}}/>We always deliver on time.</li>
                </ul>
            </div>
        </section>
    )
}

export default About