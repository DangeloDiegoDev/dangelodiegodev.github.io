import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';

const Skills = () => {
    const $selectedLanguage = useStore(selectedLanguage)

    return (
    <section id='skills' className="h-fit flex flex-col justify-center items-center pt-28">
        <h1 className='font-bold text-3xl text-center'>{$selectedLanguage.skills_title}</h1>
        <div className='flex flex-wrap justify-center bg-slate-100 gap-16 py-6 px-4 border-2 rounded-2xl mt-28 mx-8'>
            <img title='HTML' src='html.svg' className='w-24 h-24' />
            <img title='CSS' src='css.svg' className='w-24 h-24' />
            <img title='JavaScript' src='js.svg' className='w-24 h-24' />
            <img title='TypeScript' src='ts.svg' className='w-24 h-24' />
            <img title='Java' src='java.svg' className='w-24 h-24' />
            <img title='Spring Boot' src='springboot.svg' className='w-24 h-24' />
            <img title='Node.js' src='node.svg' className='w-24 h-24' />
            <img title='Express.js' src='express.svg' className='w-24 h-24' />
            <img title='Socket.io' src='socketio.svg' className='w-24 h-24' />
            <img title='Git' src='git.svg' className='w-24 h-24' />
            <img title='Angular' src='angular.svg' className='w-24 h-24' />
            <img title='React' src='react.svg' className='w-24 h-24' />
            <img title='Next.js' src='nextjs.svg' className='w-24 h-24' />
            <img title='Auth.js' src='authjs.webp' className='w-20 my-auto' />
            <img title='Astro' src='astro.svg' className='w-24 h-24' />
            <img title='Tailwind' src='tailwind.svg' className='w-24 h-24' />
            <img title='MySQL' src='mysql.svg' className='w-24 h-24' />
            <img title='Sequelize' src='sequelize.svg' className='w-24 h-24' />
            <img title='Prisma' src='prisma.svg' className='w-24 h-24' />
            <img title='React Hook Form' src='hook-form.svg' className='w-24 h-24' />
            <img title='Zod' src='zod.svg' className='w-24 h-24' />
            <img title='Firebase' src='firebase.svg' className='w-24 h-24' />
        </div>
    </section>)
}

export default Skills