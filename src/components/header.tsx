import Link from 'next/link';
import ColorLogo from '../assets/Color-Logo.svg';
import WhiteLogo from '../assets/logo_white.svg';
import FB from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import './header.scss';

interface HeaderProps {
  bgColor?: 'light' | 'dark';
}

export default function Header(props: HeaderProps) {
  const { bgColor } = props;
  return (
    <header
      className={`md:h-1/3 ${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'}`}
    >
      <div>
        <Link href='/'>
          {bgColor === 'light' && <ColorLogo width='156' height='150' />}
          {bgColor === 'dark' && <WhiteLogo width='156' height='150' />}
        </Link>
      </div>
      <div className='flex flex-col'>
        <ul className='align-center flex justify-end'>
          <li>
            <Link href=''>
              <FB
                className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'} m-2`}
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Instagram
                className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'} m-2`}
              />
            </Link>
          </li>
        </ul>
        <nav>
          <ul className='flex'>
            <li className='m-1 text-lg font-demi'>
              <Link href='/about' className='flex p-1'>
                About
              </Link>
            </li>
            <li className='m-1 text-lg font-demi'>
              <Link href='/about' className='flex p-1'>
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
