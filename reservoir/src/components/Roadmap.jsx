import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roadmap = [
  { title: "Phase 1: Launch 🎉", desc: "Initial release of Reservoir with core domains." },
  { title: "Phase 2: Expansion 🌍", desc: "Add more domains and curated resources." },
  { title: "Phase 3: AI Integration 🤖", desc: "Smart recommendations powered by AI." },
  { title: "Phase 4: Community 👥", desc: "User profiles, contributions, and discussions." },
  { title: "Phase 5: Mobile App 📱", desc: "Reservoir on iOS & Android for easy access." },
];

export default function RoadmapCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roadmap.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="w-full py-20 flex flex-row justify-center">
      <div className="flex flex-row justify-center items-center bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-1 w-[350px]">
        <div className="relative w-[350px] h-[200px] h-full w-full bg-white rounded-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center items-center text-center "
            >
              <h2 className="text-xl font-semibold">{roadmap[index].title}</h2>
              <p className="text-gray-600 mt-2">{roadmap[index].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
