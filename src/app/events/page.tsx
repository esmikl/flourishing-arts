import Header from '@/components/header';
import '../styles/about.scss';
import Footer from '@/components/footer';
import '../styles/events.scss';
import events from './events.json';

export default function Page() {
  return (
    <div className='block h-dvh'>
      <Header bgColor='light' />
      <main className='p-0 events-main'>
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
            <p className='md:text-2xl'>Check back for our upcoming events!</p>
            {/*{events.map((event) => (*/}
            {/*  <div className='event-wrapper' key={event.name}>*/}
            {/*    <div className='event-listing flex flex-wrap'>*/}
            {/*      <div className='flex-auto'>*/}
            {/*        <h3 className='event-title text-[1.5rem] md:text-[2rem]'>{event.name}</h3>*/}
            {/*        <p className='event-speaker'>{event.presenter}</p>*/}
            {/*        <p className='event-date mb-3'>{event.date} • 3:00-4:30 p.m.</p>*/}
            {/*        <p>{event.location} | {event.address}</p>*/}
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
