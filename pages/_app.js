import "../styles/globals.css";
import Link from "next/link";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-800 shadow-lg">
        <Link href="/">
          <span className="text-2xl font-bold text-green-400 cursor-pointer">Kodhane</span>
        </Link>
        <div className="space-x-4">
          <Link href="/problems">
            <span className="hover:text-green-300 cursor-pointer">Sorular</span>
          </Link>
          <Link href="/editor">
            <span className="hover:text-green-300 cursor-pointer">Kod Editörü</span>
          </Link>
          <Link href="/profile">
            <span className="hover:text-green-300 cursor-pointer">Profil</span>
          </Link>
        </div>
      </nav>

      {/* Sayfa İçeriği */}
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;