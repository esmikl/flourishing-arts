import Header from '@/components/header';
import './styles/home.scss';
import Image from "next/image";
import mobileFeature from "../assets/AfterlightGraphic_Portrait 1080 x 1350.jpg";
import desktopFeature from "../assets/AfterlightGraphic_1080P Horizontal.png";

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
            <h2 className="text-white text-center lg:text-5xl xl:text-7xl mb-9">Special Event: Afterlight</h2>
            <Image
              className='block lg:hidden'
              src={mobileFeature}
              alt="Afterlight promotion image"
            />
            <Image
              className='hidden lg:block'
              src={desktopFeature}
              alt="Afterlight promotion image"
            />
            <p className="text-white text-center mt-4">Join us for an evening supporting Flourishing Arts! Featuring
              music by S. Carey & friends,
              Luray & Scott Burton’s Ritual Magick. Includes immersive audio-reactive projected art, community art,
              an auction and information on healing arts. Proceeds go to Flourishing Arts!</p>
            <p className='text-1xl md:text-2xl mb-5 mt-5 text-white text-center'>Where: Pablo Center at the Confluence</p>
            <p className='text-1xl md:text-2xl mb-5 text-white text-center'>When: Saturday, May 23 • Event starts at 7:00 p.m.</p>
            <a href="https://trellis.org/afterlight-by-flourishing-arts" target="_blank"
               className="rounded-md py-4 px-6 bg-white text-center font-bold flex justify-center mx-auto my-4 transition duration-200 hover:bg-gray-3">Buy
              Tickets Here!</a>
          </div>
        </div>
      </main>
    </div>
  );
}
