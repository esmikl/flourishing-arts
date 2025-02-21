import Header from '@/components/header';
import GoFundMe from '../../assets/gofundme.svg';
import '../styles/donate.scss';

export default function Page() {
  return (
    <div className='block h-dvh'>
      <Header bgColor='light' />
      <main>
        <div className='bg-accent-yellow'>
          <div className='container'>
            <h1>Support What We Do</h1>
            <p className='md:text-xl/9'>
              Help us raise awareness for how art fosters hope, healing,
              forgiveness and health for all.
            </p>
          </div>
        </div>
        <div className='container'>
          <h2 className='mb-8 text-center'>How to Donate</h2>
          <div className='m-auto flex max-w-screen-lg flex-wrap'>
            <div className='basis-full p-4'>
              <p className='mb-10 text-center lg:text-2xl/9'>
                Donations can be made through GoFundMe, or if you wish to
                arrange another way to donate, please contact us:{' '}
                <a
                  className='text-primary-700 underline hover:no-underline'
                  href='mailto:info@flourishingartsec.org'
                >
                  info@flourishingartsec.org
                </a>
                .
              </p>
            </div>
            <div className='basis-full p-4'>
              <div className='go-fund-me rounded-lg bg-white p-4'>
                <GoFundMe />
                <p className='my-8 text-lg font-demi'>
                  Support community healing through the arts
                </p>
                <a
                  className='delay-50 inline-block w-full rounded-lg bg-secondary-300 p-4 text-center font-bold uppercase transition ease-in-out hover:bg-secondary-200'
                  href='https://gofund.me/43480785'
                  target='_blank'
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
