import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allResources, setAllResources] = useState([]);
  const navigate = useNavigate();

  // robust slugify so it matches your row ids/refs
  const slugify = (s) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    const domains = [
      "webd",
      "appd",
      "blockchain",
      "devops",
      "cybersec",
      "dsa",
      "digital-marketing",
      "uiux",
      "ai",
      "opensource",
      "data-analysis",
    ];

    Promise.all(
      domains.map((d) =>
        fetch(`/resources/${d}.json`)
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null)
      )
    ).then((data) => {
      const merged = [];
      data.forEach((domainData, i) => {
        if (!domainData) return;
        const domain = domains[i];
        const resources = domainData.resources || {};
        Object.keys(resources).forEach((type) => {
          (resources[type] || []).forEach((r) => {
            const slug = slugify(r.title || "");
            merged.push({ ...r, domain, type, slug });
          });
        });
      });
      setAllResources(merged);
    });
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    if (!allResources.length) return;

    const q = query.toLowerCase();
    const filtered = allResources.filter((r) =>
      (r.title || "").toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
  }, [query, allResources]);

  const handleSelect = (res) => {
    setQuery("");
    setResults([]);
    // send tab + resource (slug) + highlight (raw title) + #hash(slug)
    navigate(
      `/${res.domain}?tab=${res.type}&resource=${res.slug}&highlight=${encodeURIComponent(
        res.title
      )}#${res.slug}`
    );
  };

  return (
    <div className="relative w-[350px]">
      <input
        type="search"
        name="search"
        placeholder="Search resources..."
        id="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none text-lg p-3 rounded-2xl w-full shadow-md border"
        onKeyDown={(e) => {
          if (e.key === "Enter" && results[0]) handleSelect(results[0]);
        }}
      />

      {results.length > 0 && (
        <ul className="absolute top-full mt-1 w-full bg-white border rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((res, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(res)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              <span className="font-medium">{res.title}</span>{" "}
              <span className="text-gray-500 text-xs">
                ({res.domain} → {res.type})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
