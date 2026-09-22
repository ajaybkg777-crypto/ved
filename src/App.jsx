import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Welcome from "./components/Welcome.jsx";
import Story from "./components/Story.jsx";
import Memories from "./components/Memories.jsx";
import VaidehiLetters from "./components/VaidehiLetters.jsx";
import PersonalityReport from "./components/PersonalityReport.jsx";
import Complaints from "./components/Complaints.jsx";
import SisterPass from "./components/SisterPass.jsx";
import OnePromise from "./components/OnePromise.jsx";
import FinalGift from "./components/FinalGift.jsx";
import FinalMessage from "./components/FinalMessage.jsx";
import FinalScreen from "./components/FinalScreen.jsx";

const nav = [
  ["Story", "#story"],
  ["Memories", "#memories"],
  ["Vaidehi", "#vaidehi"],
];

function FloatingNav() {
  const [open, setOpen] = useState(false);
  const go = (target) => {
    setOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className="nav-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="story-navigation"
        onClick={() => setOpen((item) => !item)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <nav id="story-navigation" className={`floating-nav ${open ? "open" : ""}`} aria-label="Story navigation">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Heart size={15} /> Vaidehi</button>
        {nav.map(([label, target]) => <button key={target} onClick={() => go(target)}>{label}</button>)}
      </nav>
    </>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  if (!entered) return <LoadingScreen onEnter={() => setEntered(true)} />;

  return (
    <main>
      <FloatingNav />
      <Welcome />
      <Story />
      <Memories />
      <VaidehiLetters />
      <PersonalityReport />
      <Complaints />
      <SisterPass />
      <OnePromise />
      <FinalGift />
      <FinalMessage />
      <FinalScreen />
    </main>
  );
}
