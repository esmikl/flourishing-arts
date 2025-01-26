import Link from 'next/link';
import Logo from '../assets/Color-Logo.svg';
import FB from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';

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
          <Logo width='156' height='150' />
        </Link>
      </div>
      <div>
        <div>
          <FB
            className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'}`}
          />
          <Instagram
            className={`${bgColor && bgColor === 'dark' ? 'text-white' : 'text-text'}`}
          />
        </div>
        <nav></nav>
      </div>
    </header>
  );
}
