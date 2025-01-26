import Link from 'next/link';

export default function Header() {
  return (
    <header className='h-[64px] bg-primary-900'>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <div>
        <div>Socials</div>
        <nav></nav>
      </div>
    </header>
  );
}
