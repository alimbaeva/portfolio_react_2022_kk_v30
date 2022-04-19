import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Photo from '../../assets/images/asel.jpg';
import { SiCodewars, SiGithub, SiTelegram } from 'react-icons/si';
import { init } from 'ityped'
import './home.scss'

function Home() {

    const onimatateTextRef = useRef();
    useEffect(() => {
        init(onimatateTextRef.current, {
            showCursor: true,
            strings: ['Frontent React Developer'],
            backDelay: 1500,
            backSpeed: 60,
        })
    }, [])

    return (
        <section className='home'>
            <div className="container home__container">
                <div className="home__left">
                    <h1>Asel Alimbaeva</h1>
                    <p className='home__subtitle'><span ref={onimatateTextRef}></span></p>
                    <p>
                        A year ago, I was faced with a choice, to work at my job and devote less time to my children, or to leave my job and find another. But what?

                        I started to study different professions, modern and actual professions, professions of the future. I thought a lot and thought about how I could make sure that all my needs were met. And I stopped in the field of IT. From the first, I began to study and write codes on my own to solve problems in Python,
                        and I realized that I really like it. And seriously engaged in the transformation of his profession.
                    </p>
                    <ul>
                        <li><a href="https://t.me/aselAl86" target="_blank" rel='noopener noreferrer'>
                            <SiTelegram className='home__icon' />
                        </a></li>
                        <li><a href="https://github.com/alimbaeva" target="_blank" rel='noopener noreferrer'>
                            <SiGithub className='home__icon' />
                        </a></li>
                        <li><a href="https://www.codewars.com/users/alimbaeva" target="_blank" rel='noopener noreferrer'>
                            <SiCodewars className='home__icon' />
                        </a></li>
                    </ul>
                    <Link to='/contact' className='home__btn'>Hire Me</Link>
                </div>
                <div className="home__right">
                    <img src={Photo} alt="Hero foto" />
                </div>
            </div>
        </section>
    )
}

export default Home