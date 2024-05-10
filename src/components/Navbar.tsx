import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-6 bg-slate-600 mb-4">
      <h2 className="text-2xl font-semibold text-gray-50">
        <Link href={'/'}>JotaTrip</Link>
      </h2>
      <ul className="flex items-center gap-10 font-semibold text-gray-50">
        <li>
          <Link href={'/viagens'}>Viagens</Link>
        </li>
        <li>
          <Link href={'/faleconosco'}>Fale Conosco</Link>
        </li>
      </ul>
      <button className="border-2 rounded-lg px-6 py-2 border-gray-50 font-semibold text-gray-50">
        Entrar
      </button>
    </nav>
  );
}
