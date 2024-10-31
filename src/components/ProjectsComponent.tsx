import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';
import "./Projects.css";
import "../styles/animation-reveal.css";
import { techs } from "../services/techsEnum.js";

const ProjectsComponent = () => {
    const $selectedLanguage = useStore(selectedLanguage);

    const sliders = [
        { title: $selectedLanguage.project_url_shortener, images: ['url-shortener-1.png', 'url-shortener-2.png', 'url-shortener-3.png'], link: 'https://acortadordeenlaces.vercel.app', techs: [techs.NEXT_JS, techs.AUTH_JS, techs.PRISMA, techs.POSTGRESQL, techs.JWE_TOKENS, techs.BCRYPT, techs.HOOK_FORM, techs.ZOD, techs.TAILWIND] },
        { title: $selectedLanguage.project_roulette, images: ['roulette.png'], techs: [techs.REACT, techs.CANVAS, techs.TAILWIND] },
        { title: $selectedLanguage.project_ecommerce, images: ['ml-1.png', 'ml-2.png', 'ml-3.png'], link: 'https://mercalibre-365b2.web.app', techs: [techs.SPRING_BOOT, techs.ANGULAR, techs.FIREBASE_STORAGE, techs.MYSQL, techs.JWT, techs.CSS] },
        { title: $selectedLanguage.project_first_portfolio, images: ['first-portfolio-1.png', 'first-portfolio-2.png', 'first-portfolio-3.png'], link: 'https://front-end-f038b.web.app', techs: [techs.SPRING_BOOT, techs.ANGULAR, techs.FIREBASE_STORAGE, techs.MYSQL, techs.JWT, techs.CSS] },
        { title: $selectedLanguage.project_wtg, images: ['wtg-1.png', 'wtg-2.png', 'wtg-3.png', 'wtg-4.png'], techs: [techs.NEXT_JS, techs.AUTH_JS, techs.SOCKET_IO, techs.PRISMA, techs.SQLITE, techs.TAILWIND] },
        { title: $selectedLanguage.project_tetris, images: ['tetris.png'], techs: [techs.JAVASCRIPT, techs.CANVAS, techs.HTML, techs.CSS] },
        { title: $selectedLanguage.project_social_app, images: ['social-app-1.png', 'social-app-2.png', 'social-app-3.png'], techs: [techs.SOCKET_IO, techs.EXPRESS, techs.SEQUELIZE, techs.MYSQL, techs.JWT, techs.BCRYPT, techs.JOI, techs.REACT, techs.FIREBASE_STORAGE, techs.TAILWIND] },
    ];

    return <div id="projects" className="h-fit w-full mx-auto px-8 pt-28">
        <h1 className='font-bold text-3xl text-center'>{$selectedLanguage.projects}</h1>
        <div className="columns-2 gap-20 mt-28 mx-auto xl:w-[1000px] max-lg:columns-1">
            {sliders.map((slider, index) => (
                <div key={index} className="slider animation-reveal" style={{ '--slide-name': slider.images.length === 3 && "threeImagesSlide" || slider.images.length === 4 && "fourImagesSlide", '--total-items': slider.images.length } as React.CSSProperties}>
                    <div className="bg-rose-500 hover:bg-rose-600 rounded-md p-2 min-h-[72px] flex items-center justify-between max-lg:flex-col max-lg:gap-3">
                        <h1 className="text-center content-center grow text-xl cursor-default">{slider.title}</h1>
                        {slider.link &&
                            <a href={slider.link} target="_blank" className="max-lg:mb-1">
                                <div className="bg-slate-950 text-sm ring-2 ring-white lg:mr-1 lg:ml-2 box-content p-2 lg:h-fit max-lg:h-10 max-lg:py-0 flex items-center text-center rounded-lg">
                                    <span>{$selectedLanguage.click_to_go}</span>
                                </div>
                            </a>
                        }
                    </div>
                    <div className="overflow-hidden">
                        <div className="slides">
                            {slider.images.map((e, index) => (
                                <a href={e} key={index} target="_blank" className="min-w-full h-auto cursor-zoom-in">
                                    <img src={e} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="h-fit flex flex-wrap gap-2 justify-center">
                        {slider.techs?.map((e, index) => (
                            <div key={index} className="flex bg-rose-500 hover:bg-rose-600 items-center p-2 rounded-md cursor-default">
                                <p>{e.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default ProjectsComponent