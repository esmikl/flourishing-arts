import Header from '@/components/header';
import '../styles/about.scss';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <div className='block h-dvh'>
      <Header bgColor='light' />
      <main className='p-0'>
        <div className='bg-primary-900'>
          <div className='container'>
            <h1 className='text-white'>Who We Are</h1>
            <p className='text-white md:text-xl/9'>
              We are a non-profit group of local artists, musicians, business
              owners and others dedicated to the arts, and the power of the arts
              to help our lives flourish. We believe in all forms of art - as
              powerful tools both individually, as well as within our community
              - for healing and health. We hope to raise awareness for how art
              fosters hope, healing, forgiveness and health for all.
            </p>
          </div>
        </div>
        <div>
          <div className='container'>
            <h2 className='mb-8 text-center'>Our Goals</h2>
            <div className='goals-grid'>
              <div className='goals-grid__item bg-accent-yellow'>
                <p className='goals-number'>01</p>
                <h3>Visibility of Public Arts</h3>
                <p>
                  Improve community access to and visibility of public arts,
                  specifically in the forms of healing arts in all forms,
                  impacting the lives of those individuals and neighborhoods we
                  serve, so that we all can flourish.
                </p>
              </div>
              <div className='goals-grid__item bg-secondary-300'>
                <p className='goals-number'>02</p>
                <h3>Foster Healing</h3>
                <p>Foster individual and community healing through the arts.</p>
              </div>
              <div className='goals-grid__item bg-accent-green'>
                <p className='goals-number'>03</p>
                <h3>Inspire Change</h3>
                <p>
                  Inspire social and personal change through artistic
                  experiences.
                </p>
              </div>
              <div className='goals-grid__item bg-accent-greenVariant'>
                <p className='goals-number'>04</p>
                <h3>Arts Liaison</h3>
                <p>
                  Serve as a liaison between artists, residents, civic leaders,
                  and local businesses.
                </p>
              </div>
              <div className='goals-grid__item bg-secondary-100'>
                <p className='goals-number'>05</p>
                <h3>DEI</h3>
                <p>
                  Catalyze cultural arts exchanges and connections, building
                  equity, diversity and inclusion in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
