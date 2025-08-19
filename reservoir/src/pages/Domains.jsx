import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Domains() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    fetch("/resources/domains.json") // 👉 create this JSON file in public/resources/
      .then((res) => res.json())
      .then((data) => setDomains(data.domains || []))
      .catch(() => setDomains([]));
  }, []);

  const colors = [
    "bg-pink-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-teal-100",
    "bg-red-100",
    "bg-indigo-100",
    "bg-orange-100",
    "bg-cyan-100",
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-12 mt-6 text-center">Explore All Domains</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {domains.map((d, idx) => (
          <Link
            key={d.slug}
            to={`/${d.slug}`}
            className={`p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center justify-center text-center ${colors[idx % colors.length]}`}
          >
            <h2 className="text-lg font-semibold">{d.name}</h2>
            {d.tagline && <p className="text-gray-600 text-sm mt-2">{d.tagline}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
