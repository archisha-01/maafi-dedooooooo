"use client";

const stickers = ["✿", "★", "♡", "☻", "✦", "!!!"];

export default function Home() {
  return (
    <main className="home">
      <div className="tape tape-left">OFFICIAL BEST FRIEND BUSINESS</div>
      <div className="sticker s1">★</div><div className="sticker s2">♡</div>
      <p className="eyebrow">a very important announcement / probably</p>
      <h1>HEY,<br/><em>LIKHIT!!</em></h1>
      <p className="intro">Welcome to your very own corner of the internet. Yes, I made you a website. No, you are not allowed to be annoying about it. (You probably will be.)</p>
      <div className="cover-polaroid">
        <div className="cover-photo">
          <img src="/photos/cover.jpg" alt="Our favourite photo" onError={(e) => {e.currentTarget.style.display="none";}} />
          <div className="placeholder"><b>INSERT OUR PHOTO HERE</b><small>save your picture as public/photos/cover.jpg</small>♡</div>
        </div>
        <p>certified memories in progress ✎</p>
      </div>
      <div className="speech">IMPORTANT: YOU ARE APPRECIATED. THAT'S THE POST.</div>
      <a className="big-button" href="/apology">okay, let's address the situation →</a>
      <p className="tiny">P.S. scroll around. I may have hidden some nonsense.</p>
      <div className="sticker s3">✿</div>
    </main>
  );
}