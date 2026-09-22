import ProgressBar from "./common/ProgressBar.jsx";

const stats = [
  { label: "Drama", value: "96% 🎭", progress: 96 },
  { label: "Gussa", value: "91% 😤", progress: 91 },
  { label: "Patience", value: "2% ⏳", progress: 2 },
  { label: "Ability to annoy her brother", value: "♾️ 😂", progress: 100 },
  { label: "Making her brother worry", value: "100% 😭", progress: 100 },
  { label: "Listening to brother's advice", value: "Connection lost... 📵", progress: 8, status: "lost" },
];

export default function PersonalityReport() {
  return (
    <section id="fun" className="section report">
      <div className="report-panel">
        <header className="report-header">
          <div>
            <span className="report-status"><i /> Okay...</span>
            <h2>Official <em>Vaidehi</em> report</h2>
          </div>
          <p>Your big brother has finally completed your <strong>official personality analysis.</strong> 😂</p>
        </header>
        <div className="report-divider"><span>Analysis complete</span></div>
        {stats.map((stat) => <ProgressBar key={stat.label} {...stat} />)}
        <div className="result-stamp">Dangerously adorable.</div>
      </div>
    </section>
  );
}
