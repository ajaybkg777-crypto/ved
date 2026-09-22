import { BadgeCheck, Check } from "lucide-react";

const included = [
  "Someone who will always cheer for you",
  "Someone who will listen to your endless stories",
  "Someone who will motivate you when you feel low",
  "Someone who will tease you for absolutely no reason",
  "Someone who will always have your back",
  "Someone you can annoy whenever you want",
];

export default function SisterPass() {
  return (
    <section className="section pass-section">
      <article className="sister-pass">
        <header className="certificate-header">
          <BadgeCheck size={30} aria-hidden="true" />
          <div><small>Officially Yours</small><h2>A Small Certificate</h2></div>
          <span>For a very special sister</span>
        </header>

        <dl>
          <div><dt>Name</dt><dd>Vaidehi</dd></div>
          <div><dt>Issued by</dt><dd>Ajay</dd></div>
          <div><dt>Position</dt><dd>Little Sister</dd></div>
          <div><dt>Status</dt><dd>Permanent</dd></div>
          <div className="certificate-wide"><dt>Valid From</dt><dd>The day you became family</dd></div>
        </dl>

        <section className="certificate-benefits">
          <h3>Included Forever</h3>
          <ul>{included.map((item) => <li key={item}><Check size={16} /> <span>{item}</span></li>)}</ul>
        </section>

        <dl className="certificate-policy">
          <div><dt>Expiry</dt><dd>Never</dd></div>
          <div><dt>Renewal</dt><dd>Not needed</dd></div>
          <div><dt>Cancellation</dt><dd>Not possible</dd></div>
          <div><dt>Transfer</dt><dd>Not allowed 😌</dd></div>
        </dl>

        <section className="certificate-terms">
          <h3>Terms &amp; Conditions</h3>
          <p>You may grow older.<br />You may change.<br />Life may take you to different places.</p>
          <p>But one thing stays the same—</p>
          <strong>You will always have a brother cheering for you from somewhere.</strong>
        </section>

        <div className="certificate-status"><i /> Status: Permanently Active</div>
      </article>
    </section>
  );
}
