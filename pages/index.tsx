import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-green-400">Kodhane'ye Hoş Geldiniz</h1>
      <p className="mt-4 text-lg text-gray-300">
        Algoritma ve veri yapıları problemlerini çözerek kendinizi geliştirin.
      </p>
      <a
        href="/problems"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
      >
        Sorulara Göz Atın
      </a>
    </div>
  );
}
