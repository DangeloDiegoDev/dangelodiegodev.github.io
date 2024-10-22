import { useState, useEffect, useRef } from 'react';
import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';
import CardComponent from './CardComponent.tsx';

export default function Contact() {
    const $selectedLanguage = useStore(selectedLanguage)

    const [nameValue, setNameValue] = useState('');
    const [msgValue, setMsgValue] = useState('');
    const emailRef = useRef(null);
    const discordRef = useRef(null);

    const toggleCard = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current!.classList.toggle('visible');
    };

    const handleNameChange = (event: any) => {
        const newNameValue = encodeURIComponent(event.target.value);
        setNameValue(newNameValue);
    };

    const handleMsgChange = (event: any) => {
        const newMsgValue = encodeURIComponent(event.target.value);
        setMsgValue(newMsgValue);
    };

    const handleButtonClick = () => {
        const subject = encodeURIComponent('Portfolio Contact');
        const body = `Name: ${nameValue}%0AMessage: ${msgValue}`;
        const mailtoLink = `mailto:dangelo.diego.gabriel@gmail.com?subject=${subject}&body=${body}`;

        window.open(mailtoLink, '_blank');
    };

    useEffect(() => {
        const submitBtn = document.querySelector('#submit-msg');

        const handleClick = (e: any) => {
            e.preventDefault();
            handleButtonClick();
        };

        submitBtn?.addEventListener('click', handleClick);

        return () => submitBtn?.removeEventListener('click', handleClick)

    }, [nameValue, msgValue]);

    return (
        <div id="contact" className="rounded-lg w-fit h-[850px] bg-transparent m-auto flex flex-col justify-center">
            <div className="mb-20">
                <h2 className="text-center font-bold text-3xl">{$selectedLanguage.contact_me}</h2>
            </div>
            <form className="flex flex-col gap-10 px-2">
                <div className="placeholder-container">
                    <input
                        id="name-input"
                        required
                        placeholder=""
                        className="w-full pt-3 bg-transparent border-b-2 border-rose-500 focus:outline-none hover:cursor-pointer"
                        type="text"
                        onChange={handleNameChange}
                    />
                    <label htmlFor="name-input" className="placeholder hover:text-gray-400 hover:cursor-pointer text-xl">
                        <span>{$selectedLanguage.contact_me_name}</span>
                    </label>
                    <div className="bottom-bar"></div>
                </div>
                <div className="placeholder-container">
                    <textarea
                        id="msg-input"
                        required
                        placeholder=""
                        className="resize-none h-[39px] bg-transparent border-b-2 border-rose-500 focus:outline-none hover:cursor-pointer"
                        onChange={handleMsgChange}
                    />
                    <label htmlFor="msg-input" className="placeholder hover:text-gray-400 hover:cursor-pointer text-xl">
                        <span>{$selectedLanguage.contact_me_msg}</span>
                    </label>
                    <div className="bottom-bar"></div>
                </div>
                <a id="submit-msg" href="#" className='border-2 hover:bg-rose-500 w-fit p-2 rounded-md'>
                    {$selectedLanguage.contact_me_btn}
                </a>
            </form>
            <div className="flex justify-center items-center gap-4 before:flex-1 after:flex-1 before:bg-slate-50 before:h-[1px] after:bg-slate-50 after:h-[1px] my-20 px-2">
                <span>{$selectedLanguage.or}</span>
            </div>
            <div>
                <h2 className="text-center font-bold text-3xl mb-4">{$selectedLanguage.social_media}</h2>
                <div className="flex gap-5 justify-center relative">
                    <div className="relative" onMouseEnter={() => toggleCard(emailRef)} onMouseLeave={() => toggleCard(emailRef)}>
                        <svg className="hover:bg-red-600 rounded-sm cursor-pointer p-1 box-content" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><rect x="3" y="5" width="18" height="14" rx="2" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round" /></svg>
                        <CardComponent message="dangelo.diego.gabriel@gmail.com" targetRef={emailRef} color="bg-red-600" />
                    </div>
                    <div className="relative" onMouseEnter={() => toggleCard(discordRef)} onMouseLeave={() => toggleCard(discordRef)}>
                        <svg className="hover:bg-[#5865f2] hover:fill-[#fff] rounded-sm cursor-pointer p-1 box-content" viewBox="0 0 127.14 96.36" width="24px" height="24px" fill="#f1f5f9"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></g></g></g></svg>
                        <CardComponent message="DangeloDiegoDev" targetRef={discordRef} color="bg-[#5865f2]" />
                    </div>
                    <a href="https://www.linkedin.com/in/dangelodiego">
                        <svg className="hover:bg-[#0077b5] rounded-sm cursor-pointer p-1 box-content" viewBox="0 0 72 72" width="24px" height="24px"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="none" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#f1f5f9" /></g></svg>
                    </a>
                    <a href="https://x.com/dangelodiegodev">
                        <svg className="hover:bg-black rounded-sm cursor-pointer p-1 box-content" viewBox="0 0 24 24" width="24px" height="24px" fill="#f1f5f9"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                    <a href="https://github.com/dangelodiegodev">
                        <svg className="hover:bg-black rounded-sm cursor-pointer p-1 box-content" viewBox="0 0 24 24" width="24px" height="24px" fill="#f1f5f9"><path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};