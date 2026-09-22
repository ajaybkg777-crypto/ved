import { Lock, Unlock } from "lucide-react";
import { useState } from "react";
import Button from "./common/Button.jsx";
import StaticImage from "./common/StaticImage.jsx";

export default function SecretVault() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <section id="vault" className="section dark vault">
      <span className="eyebrow">Access restricted</span>
      <h2>There is something here that is not meant to be opened casually.</h2>
      {!unlocked ? (
        <Button onClick={() => setUnlocked(true)}><Lock size={16} /> Unlock</Button>
      ) : (
        <div className="vault-open">
          <Unlock size={24} />
          <StaticImage src="/media/photos/school-rakhi.jpeg" alt="Brother and sister celebrating together at school" />
          <p>Unlocked: a quiet reminder that you are officially important here. No appeal process available.</p>
        </div>
      )}
    </section>
  );
}
