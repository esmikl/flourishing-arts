import Header from '@/components/header';
import './home.scss';

export default function Home() {
  return (
    <div className='home-hero'>
      <Header bgColor='dark' />
      <main className='home-main'>
        <div className='align-center flex h-1/2 flex-col justify-center'>
          <h1 className='text-center text-white'>
            Flourishing<span className='arts-heading'>Arts</span>
          </h1>
        </div>
      </main>
    </div>
  );
}
