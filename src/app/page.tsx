import Header from '@/components/header';
import './styles/home.scss';
import Image from "next/image";
import desktopFeature from '../assets/Sponsors_Graphics_Sunset.jpg';

export default function Home() {
  return (
    <div className='home-hero'>
      <Header bgColor='dark' />
      <main className='home-main'>
        <div className='container'>
          <div className='align-center flex h-1/2 flex-col justify-center'>
            <h1 className='home-heading text-center text-white mb-12'>
              Flourishing<span className='arts-heading'>Arts</span>
            </h1>
            <h2 className="text-white text-center lg:text-5xl xl:text-7xl mb-9">Thank you!</h2>
            <p className="text-white text-center md:text-2xl mb-8">Thank you to everyone who attended our Afterlight event and a HUGE THANK YOU to our sponsors!</p>
            {/*<Image*/}
            {/*  className='block lg:hidden'*/}
            {/*  src={mobileFeature}*/}
            {/*  alt="Afterlight promotion image"*/}
            {/*/>*/}
            {/*<Image*/}
            {/*  className='hidden lg:block'*/}
            {/*  src={desktopFeature}*/}
            {/*  alt="Afterlight promotion image"*/}
            {/*/>*/}
            <Image className='block' src={desktopFeature} alt="Thank you to our sponsors!" />
          </div>
        </div>
      </main>
    </div>
  );
}
