const reasons = [
  "terese baat karna feels sabse asaan(ik recently lil tough but uske alawa hehe)",
  "you make even the most normal momos and gappe khaane wale days special",
  "you + me = total tabahi wala chaos",
  "I got lucky to have this idiot as mera sabse pyara dost",
  "You deserve the best only, nothing less",
  "you are my constant among all the people who always leave me :))"
];

export default function Reasons() {
  return (
    <main className="page reasons-page">
      <p className="eyebrow">page 04 / things you should know</p>
      <h1>THE LIST OF<br/><em>GOOD THINGS.</em></h1>
      <p className="sub">A short list. Could've made it longer, but zyada bhav na kha hehe.</p>
      <div className="reason-list">
        {reasons.map((reason, i) => <div className="reason" key={reason}>
          <span>0{i + 1}</span><p>{reason}</p><b>♡</b>
        </div>)}
      </div>
      <div className="burst">FRIENDSHIP<br/>APPRECIATION<br/>DEPARTMENT ★</div>
      <a className="next-link" href="/final-note">one final thing →</a>
    </main>
  );
}