import Link from 'next/link';
import logo from '../assets/FA_Feb2326_Logo.png';
import FB from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import '../app/styles/header.scss';
import Image from 'next/image';

interface HeaderProps {
  bgColor?: 'light' | 'dark';
}

export default function Header(props: HeaderProps) {
  const { bgColor } = props;
  return (
    <header
      className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'}`}
    >
      <div>
        <Link href='/'>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="Flourishing Arts splash logo"
          />
        </Link>
      </div>
      <div className='nav-wrapper flex flex-col'>
        <ul className='align-center flex justify-end'>
          <li>
            <Link
              href='https://www.facebook.com/profile.php?id=61571902109581'
              target='_blank'
            >
              <FB
                className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'} m-2`}
              />
            </Link>
          </li>
          <li>
            <Link
              href='https://www.instagram.com/flourishing_arts_ec/'
              target='_blank'
            >
              <Instagram
                className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'} m-2`}
              />
            </Link>
          </li>
        </ul>
        <nav>
          <ul className='flex flex-wrap justify-center'>
            <li className='m-1 text-lg font-demi'>
              <Link href='/about' className='flex p-1'>
                About
              </Link>
            </li>
            <li className='m-1 text-lg font-demi'>
              <Link href='/donate' className='flex p-1'>
                Donate
              </Link>
            </li>
            <li className='m-1 text-lg font-demi'>
              <Link href='/events' className='flex p-1'>
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
