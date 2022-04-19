import React from 'react';
import { motion } from "framer-motion";
import { RiHtml5Fill, RiCss3Fill, RiVuejsFill } from 'react-icons/ri';
import { DiJavascript1, DiSass, DiReact, DiMysql } from 'react-icons/di';
import { SiDocker } from 'react-icons/si';
import coreya from '../../assets/images/coreya.png';
import cde from '../../assets/images/cde.png';
import echosound from '../../assets/images/echosound.png';
import galary from '../../assets/images/galary.png';
import portfolio from '../../assets/images/portfolio.png';
import snack from '../../assets/images/snack.png';
import './about.scss';

function About() {

    const h3Variants = {
        hidden: {
            x: -1000,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const workVariants = {
        visible: (id) => (
            {
                opacity: 1,
                transition: {
                    duration: 1.3,
                    delay: id * 0.7
                }
            }
        ),
        hidden: {
            opacity: 0
        }
    }

    const works = [
        {
            id: 1,
            title: "Site for korean learning center",
            href: 'http://cks.kg/',
            igUrl: coreya
        },
        {
            id: 2,
            title: "Portfolio",
            href: "https://alimbaeva.github.io/Portfolio_RS-SCHOOL_2022_st0/portfolio/index.html",
            igUrl: portfolio
        },
        {
            id: 3,
            title: "Eco Sounds",
            href: "https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/EcoSounds/index.html",
            igUrl: echosound
        },
        {
            id: 4,
            title: "Galary Emages",
            href: "https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/GalaryEmages/index.html",
            igUrl: galary
        },
        {
            id: 5,
            title: "Snacke Game",
            href: "https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/SnackeGame/index.html",
            igUrl: snack
        },
        {
            id: 6,
            title: "Consalding Compani",
            href: "https://github.com/twoComand/Consalding_Compani_KK",
            igUrl: cde
        }
    ]

    return (
        <section className='about'>
            <div className="container">
                <div className="about__intro">
                    <motion.h1 animate={{ rotate: 360 }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 8,
                        repeatType: "reverse",
                        type: 'spring',
                    }}>Hello, this is my work!</motion.h1>
                    <p>Frontrnd React Developer</p>
                </div>
                <div className="about__skills">
                    <motion.h3
                        variants={h3Variants}
                        initial={'hidden'}
                        animate={'visible'}
                        transition={{
                            duration: 3,
                        }}
                    >My Skills</motion.h3>

                    <ul>
                        <motion.li
                            whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(5, 240, 37, 0.8)",
                                color: "#8B2252"
                            }}
                        >
                            <RiHtml5Fill />
                            HTML
                        </motion.li>
                        <li>
                            <RiCss3Fill />
                            CSS
                        </li>
                        <li>
                            <DiJavascript1 />
                            JavaScript
                        </li>
                        <li>
                            <DiSass />
                            Sass
                        </li>
                        <li>
                            <DiReact />
                            React
                        </li>
                        <li>
                            <RiVuejsFill />
                            Veu.js
                        </li>
                        <li>
                            <DiMysql />
                            MySQL
                        </li>
                        <li>
                            <SiDocker />
                            Docker
                        </li>
                    </ul>
                </div>

                <div className="about__portfolio">
                    <ul>
                        {
                            works.map((work, idx) => (
                                <motion.li
                                    variants={workVariants}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    key={idx}
                                    custom={idx}>
                                    <a href={work.href} target="_blank">{work.title}</a>
                                    <img src={work.igUrl} alt="foto" />
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About