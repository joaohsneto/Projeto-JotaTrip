import Link from 'next/link';

import Login from './Login';
import { Modal } from './Modal';

export default function Navbar() {
  return (
    <>
      <nav className="bg-gradient-to-t w-screen from-emerald-200 via-cyan-500 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href={'/'}
                  className="text-white text-xl sm:text-2xl font-bold tracking-wide"
                >
                  JotaTrip!
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Link className="text-white font-bold" href={'/users'}>
                  Promoções
                </Link>
              </div>
              <div>
                <Link
                  href={'/login'}
                  className="text-white border-2 rounded-xl border-opacity-30 border-white py-1 px-4 font-bold hover:bg-cyan-500"
                >
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal isVisible={false}>
        <Login />
      </Modal>
    </>
  );
}
