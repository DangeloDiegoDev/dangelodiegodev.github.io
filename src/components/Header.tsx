import './Header.css';
import { handleLanguage, selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';
import { useRef } from 'react';

const Header = () => {
    const $selectedLanguage = useStore(selectedLanguage);
    const hamburgerMenu = useRef<HTMLDivElement>(null);
    const langModalDesktop = useRef<HTMLDivElement>(null);
    const langModalMobile = useRef<HTMLDivElement>(null);
    const links = [
        { title: $selectedLanguage.about, link: "/#about" },
        { title: $selectedLanguage.skills, link: "/#skills" },
        { title: $selectedLanguage.projects, link: "/#projects" },
        { title: $selectedLanguage.contact, link: "/#contact" },
    ]

    function handleHamburgerMenu() {
        hamburgerMenu.current!.classList.toggle("hidden");
    }

    function handleLangModalMobile() {
        langModalMobile.current!.classList.toggle("visible")
    }

    function handleLangModalDesktop() {
        langModalDesktop.current!.classList.toggle("visible")
    }

    return <nav className="w-full h-[56px] fixed top-0 z-10 text-white flex justify-between py-4 px-10">
        <div>
            <a href="/"><span className="text-rose-500 font-bold">Diego</span> <span className="font-bold">D'Angelo</span></a>
        </div>
        {/* Mobile */}
        <svg onClick={handleHamburgerMenu} className="md:hidden cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        <div ref={hamburgerMenu} className="md:hidden hidden fixed right-0 top-14 select-none px-2 backdrop-blur-[10px]" style={{ background: "rgba(17, 24, 39, 0.9)" }}>
            <ul className="gap-10 text-center">
                {links.map((e, index) => (
                    <li key={index} className="hover:text-rose-400" onClick={handleHamburgerMenu}>
                        <a href={e.link}>{e.title}</a>
                    </li>
                ))}
                <div className="relative" onClick={handleLangModalMobile}>
                    <li className="hover:text-rose-400 cursor-pointer">{$selectedLanguage.change_language}</li>
                    <div ref={langModalMobile} className='hidden flex-col gap-1 py-1 absolute left-[-118px] top-0 backdrop-blur-[10px]' style={{ background: "rgba(17, 24, 39, 0.9)" }}>
                        <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer px-2' onClick={() => handleLanguage('en')}>
                            <img src='/gb.svg' width={'20px'} />
                            <span>ENGLISH</span>
                        </div>
                        <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer px-2' onClick={() => handleLanguage('es')}>
                            <img src='/es.svg' width={'20px'} />
                            <span>ESPAÑOL</span>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        {/* Desktop */}
        <div className='max-md:hidden'>
            <ul className="gap-10 hidden md:flex">
                {links.map((e, index) => (
                    <li key={index} className="hover:text-rose-400">
                        <a href={e.link}>{e.title}</a>
                    </li>
                ))}
                <div onMouseEnter={handleLangModalDesktop} onMouseLeave={handleLangModalDesktop}>
                    <li className="hover:text-rose-400 cursor-pointer">{$selectedLanguage.change_language}</li>
                    <div ref={langModalDesktop} className='hidden mt-4 flex-col gap-1 py-1' style={{ background: "rgba(17, 24, 39, 0.9)" }}>
                        <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer pl-2' onClick={() => handleLanguage('en')}>
                            <img src='/gb.svg' width={'20px'} />
                            <span>ENGLISH</span>
                        </div>
                        <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer pl-2' onClick={() => handleLanguage('es')}>
                            <img src='/es.svg' width={'20px'} />
                            <span>ESPAÑOL</span>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </nav>
}

export default Header