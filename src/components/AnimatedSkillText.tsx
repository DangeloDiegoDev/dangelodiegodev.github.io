import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { selectedLanguage } from '../services/languageService.js';

const AnimatedSkillText = () => {
    const $selectedLanguage = useStore(selectedLanguage);
    const skillsArray = [$selectedLanguage.skill_1, $selectedLanguage.skill_2];
    const [currentSkill, setCurrentSkill]: any = useState(getRandomSkill());
    const [isFadingOut, setIsFadingOut] = useState(false);

    function getRandomSkill() {
        return skillsArray[Math.floor(Math.random() * skillsArray.length)];
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFadingOut(true);

            setTimeout(() => {
                setCurrentSkill((prevSkill: any) => {
                    let nextSkill = getRandomSkill();
                    while (prevSkill === nextSkill) {
                        nextSkill = getRandomSkill();
                    }
                    setIsFadingOut(false);
                    return nextSkill;
                });
            }, 500);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="font-bold text-3xl min-w-[330px] min-h-[108px] text-center">
            <h1>{$selectedLanguage.im_a}{' '}</h1>
            <motion.span
                key={currentSkill}
                initial={{ opacity: 0 }}
                animate={{ opacity: isFadingOut ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-rose-500">
                {currentSkill}
            </motion.span>
        </div>
    );
};

export default AnimatedSkillText;