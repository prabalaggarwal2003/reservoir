import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function DSA() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "youtube";
  const highlightId = searchParams.get("highlight") || null;

  const [resources, setResources] = useState(null);
  const [activeTab, setActiveTab] = useState(tabParam);
  const [difficulty, setDifficulty] = useState("all");
  const [tag, setTag] = useState("all");

  const rowRefs = useRef({}); // store refs for rows
  const [highlighted, setHighlighted] = useState(null);

  // keep activeTab in sync with URL
  useEffect(() => {
    setActiveTab(tabParam);
  }, [tabParam]);

  // fetch resources
  useEffect(() => {
    fetch(`/resources/dsa.json`)
      .then((res) => res.json())
      .then((data) => setResources(data.resources))
      .catch((err) => console.error("Error loading resources:", err));
  }, []);

  // handle highlight scroll
  useEffect(() => {
    if (highlightId && rowRefs.current[highlightId]) {
      const el = rowRefs.current[highlightId];
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlighted(highlightId);

      // remove highlight after 3s
      const timer = setTimeout(() => setHighlighted(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightId, resources, activeTab]);

  if (!resources) return <div className="p-4">Loading...</div>;

  // filter function
  const filterResources = (items) => {
    if (!items) return [];
    return items.filter((item) => {
      const diffMatch = difficulty === "all" || item.difficulty === difficulty;
      const tagMatch = tag === "all" || item.tags?.includes(tag);
      return diffMatch && tagMatch;
    });
  };

  // extract unique tags
  const allTags = [
    ...new Set(
      Object.values(resources || {})
        .flat()
        .map((r) => r.tags)
        .flat()
        .filter(Boolean)
    ),
  ];

  // table renderer
  const renderTable = (items, type) => {
    const filtered = filterResources(items);

    return (
      <div className="overflow-x-auto mt-4">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Difficulty</th>
              {type === "github" && <th className="px-4 py-2">⭐ Stars</th>}
              {type === "courses" && <th className="px-4 py-2">Certificate</th>}
              <th className="px-4 py-2">Tags</th>
              <th className="px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, idx) => {
              const isHighlighted = highlighted === item.title;
              return (
                <tr
                  key={idx}
                  ref={(el) => (rowRefs.current[item.title] = el)}
                  className={`border-t transition-colors ${
                    isHighlighted
                      ? "bg-yellow-200 animate-pulse"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2 capitalize">{item.difficulty}</td>
                  {type === "github" && (
                    <td className="px-4 py-2">{item.stars || "-"}</td>
                  )}
                  {type === "courses" && (
                    <td className="px-4 py-2">
                      {item.certificate ? "✅" : "❌"}
                    </td>
                  )}
                  <td className="px-4 py-2">
                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-200 rounded-full px-2 py-0.5 mr-1"
                      >
                        {t}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Open
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-4 text-gray-500 text-center">No resources found</p>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Resources for Data Structures and Algorithms</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 p-4 bg-gray-50 border rounded-xl shadow-sm">
        <select
          className="border rounded-lg px-3 py-2"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="all">All Tags</option>
          {allTags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit">
          {["youtube", "github", "notes", "docs", "courses"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white shadow border"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {activeTab === "youtube" &&
            renderTable(resources.youtube, "youtube")}
          {activeTab === "github" && renderTable(resources.github, "github")}
          {activeTab === "notes" && renderTable(resources.notes, "notes")}
          {activeTab === "docs" && renderTable(resources.docs, "docs")}
          {activeTab === "courses" &&
            renderTable(resources.courses, "courses")}
        </div>
      </div>
    </div>
  );
}
