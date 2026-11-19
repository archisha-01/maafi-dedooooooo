"use client";

const pics = [
  ["photo-1.jpg", "a certified classic", "Caption this with the story behind the picture."],
  ["photo-2.jpg", "proof we go outside", "Add the context. Was it a good day? A chaotic day?"],
  ["photo-3.jpg", "this one is going in the archives", "A moment worth keeping."],
  ["photo-4.jpg", "no explanation needed", "Insert your inside joke here."]
];

export default function Photos() {
  return (
    <main className="page">
      <p className="eyebrow">page 03 / photographic evidence</p>
      <h1>THE PHOTO<br/><em>DUMP.</em></h1>
      <p className="sub">A highly curated collection of unserious people having a good time.</p>
      <div className="photo-grid">
        {pics.map(([file, title, caption], i) => (
          <article className={"polaroid p" + i} key={file}>
            <div className="pic">
              <img src={"/photos/" + file} alt={title} onError={(e) => {e.currentTarget.style.display="none";}} />
              <div className="placeholder"><b>PHOTO {i + 1}</b><small>public/photos/{file}</small>✿</div>
            </div>
            <h2>{title}</h2><p>{caption}</p>
          </article>
        ))}
      </div>
    
      <a className="next-link" href="/reasons">next: a list you didn't ask for →</a>
    </main>
  );
}