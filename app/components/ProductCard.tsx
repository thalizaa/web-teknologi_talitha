import React from 'react';

export default function ProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="md:flex">
        {/* Bagian Gambar / Icon */}
        <div className="md:shrink-0 bg-brand-light dark:bg-brand-dark flex items-center justify-center p-6 text-white text-3xl font-bold">
          ⚡
        </div>
        
        {/* Bagian Konten */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-accent font-semibold">
            Custom Badge
          </div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
            Next.js & Tailwind Terintegrasi
          </a>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Komponen ini menggunakan warna kustom bawaan <span className="text-brand font-semibold">brand</span>, 
            responsif terhadap mode gelap, dan tata letak yang fleksibel secara mobile-first.
          </p>
          
          {/* Tombol dengan class kustom @apply */}
          <div className="mt-5 flex gap-3">
            <button className="btn-primary">
              Beli Sekarang
            </button>
            <button className="btn-secondary">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}