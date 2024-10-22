import { atom } from 'nanostores';
import en from '../translations/en.json';
import es from '../translations/es.json';
import { getCookie, setCookie } from './cookieService';

const languages = [es, en];
export const selectedLanguage = atom();

languages.forEach((e)=>{
    if (e.language == getCookie('language') || e.language == "es") {
        selectedLanguage.set(e);
    }
});

export const handleLanguage = (languageParam) => {
    const newLanguage = languages.filter((e) => e.language === languageParam);
    selectedLanguage.set(newLanguage[0]);
    setCookie('language', languageParam);
    window.location.reload();
}