import React from 'react'

import { skills } from '../constants'
const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="purple-gradient_text font-semibold drop-shadow">Sami</span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Software Engineer based in South Korea, specializing in software and web development.</p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">
                    My Skills
                </h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain">

                                </img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>I've collaborated with forward-thinking companies, immersing myself in cutting-edge technologies, continually enhancing my skill set, and collaborating with brilliant and inspiring individuals. Here's a brief overview:</p>
                </div>
            </div>
        </section>
    )
}

export default About