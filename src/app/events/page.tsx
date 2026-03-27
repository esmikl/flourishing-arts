import Header from '@/components/header';
import '../styles/about.scss';
import Footer from '@/components/footer';
import '../styles/events.scss';
import desktopGraphic from '../../assets/AfterlightGraphic_1080P Horizontal.png';
import mobileGraphic from '../../assets/AfterlightGraphic_Portrait 1080 x 1350.jpg';
import Image from "next/image";

export default function Page() {
  return (
    <div className='block h-dvh'>
      <Header bgColor='light' />
      <main className='p-0'>
        <div className='bg-secondary-300'>
          <div className='container'>
            <h1>Events</h1>
            <p className='md:text-xl/9'>
              Explore our upcoming events and join us in the healing journey through the arts.
            </p>
          </div>
        </div>
        <div>
          <div className='container'>
            <h2 className='font-semibold text-4xl md:text-5xl mb-10'>Upcoming Events</h2>
            <Image
              src={desktopGraphic}
              alt="Afterlight an evening supporting Flourishing Arts"
              className='hidden md:block'
            />
            <Image
              src={mobileGraphic}
              alt="Afterlight an evening supporting Flourishing Arts"
              className='block md:hidden'
            />
            <h3 className='font-semibold text-4xl md:text-5xl mt-10 mb-5'>Afterlight</h3>
            <p className='text-1xl md:text-2xl mb-5'> An evening supporting Flourishing Arts!</p>
            <p className='text-2xl md:text-3xl mb-5'>Featuring the music of S Carey and Friends, Luray, and Scott Burton&#39;s Ritual Magick</p>
            <p className='text-1xl md:text-2xl mb-5'>Where: Pablo Center at the Confluence</p>
            <p className='text-1xl md:text-2xl mb-5'>When: Saturday, May 23 • Event starts at 7:00 p.m.</p>
            <p className='font-semibold'>Be the first to know when tickets go on sale!&nbsp;
              <a
                className='text-primary-700 underline hover:no-underline'
                href='https://forms.gle/2axMMgnaFQmZJvy59' target="_blank"
              >
                Join our mailing list
              </a>
            </p>
            {/*{events.map((event) => (*/}
            {/*  <div className='event-wrapper' key={event.name}>*/}
            {/*    <div className='event-listing flex flex-wrap'>*/}
            {/*      <div className='flex-auto'>*/}
            {/*        <h3 className='event-title text-[1.5rem] md:text-[2rem]'>{event.name}</h3>*/}
            {/*        <p className='event-speaker'>{event.presenter}</p>*/}
            {/*        /!*<p className='event-date mb-3'>{event.date} • 3:00-4:30 p.m.</p>*!/*/}
            {/*        /!*<p>{event.location} | {event.address}</p>*!/*/}
            {/*        <p>Be the first to know when tickets go on sale!&nbsp;*/}
            {/*          <a*/}
            {/*            className='text-primary-700 underline hover:no-underline'*/}
            {/*            href='https://forms.gle/2axMMgnaFQmZJvy59' target="_blank"*/}
            {/*          >*/}
            {/*            Join our mailing list*/}
            {/*          </a>*/}
            {/*        </p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*))}*/}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
