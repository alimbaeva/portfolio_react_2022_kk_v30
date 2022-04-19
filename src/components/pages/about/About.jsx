import React from 'react';
import { RiHtml5Fill, RiCss3Fill, RiVuejsFill } from 'react-icons/ri'
import { DiJavascript1, DiSass, DiReact, DiMysql } from 'react-icons/di'
import { SiDocker } from 'react-icons/si';
import coreya from '../../assets/images/coreya.png'
import cde from '../../assets/images/cde.png'
import echosound from '../../assets/images/echosound.png'
import galary from '../../assets/images/galary.png'
import portfolio from '../../assets/images/portfolio.png'
import snack from '../../assets/images/snack.png';
import './about.scss';

function About() {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__intro">
                    <h1>Hello, this is my work!</h1>
                    <p>Frontrnd React Developer</p>
                </div>
                <div className="about__skills">
                    <h3>My Skills</h3>

                    <ul>
                        <li>
                            <RiHtml5Fill />
                            HTML
                        </li>
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
                        <li>
                            <a href="http://cks.kg/" target="_blank">Site for korean learning center</a>
                            <img src={coreya} alt="foto" />
                        </li>
                        <li>
                            <a href="https://alimbaeva.github.io/Portfolio_RS-SCHOOL_2022_st0/portfolio/index.html" target="_blank">Portfolio</a>
                            <img src={portfolio} alt="foto" />
                        </li>
                        <li>
                            <a href="https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/EcoSounds/index.html" target="_blank">Eco Sounds</a>
                            <img src={echosound} alt="foto" />
                        </li>
                        <li>
                            <a href="https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/GalaryEmages/index.html" target="_blank">Galary</a>
                            <img src={galary} alt="foto" />
                        </li>
                        <li>
                            <a href="https://alimbaeva.github.io/Song_Game_Galary_RS-SCHOOL_2022_st0/SnackeGame/index.html" target="_blank">Snacke Game</a>
                            <img src={snack} alt="foto" />
                        </li>
                        <li>
                            <a href="https://github.com/twoComand/Consalding_Compani_KK" target="_blank">Consalding Compani</a>
                            <img src={cde} alt="foto" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About