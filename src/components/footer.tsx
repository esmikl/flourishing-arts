const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='bg-primary-900 text-white'>
      <div className='container flex flex-wrap items-center justify-between'>
        <div className='mb-3 w-full md:mb-0 md:w-1/2'>
          <p>
            Contact us at{' '}
            <a
              className='underline hover:no-underline'
              href='mailto:info@flourishingartsec.org'
              target='_blank'
            >
              info@flourishingartsec.org
            </a>
          </p>
        </div>
        <div className='w-full md:w-1/2 md:text-right'>
          <small>
            &copy; {currentYear} Flourishing Arts, Inc. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
