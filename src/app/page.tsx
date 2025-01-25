import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Link href="/about" style={{color: 'black', textDecoration: 'underline'}}>About Us</Link>
      </main>
    </div>
  );
}
