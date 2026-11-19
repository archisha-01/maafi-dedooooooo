import "./globals.css";

export const metadata = {
  title: "The Likhit Archive ✿",
  description: "A little scrapbook for a very important friend."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <a className="logo" href="/">the likhit archive <span>✿</span></a>
          <nav>
            <a href="/">home</a><a href="/apology">my bad</a>
            <a href="/photos">photo dump</a><a href="/reasons">the list</a>
            <a href="/final-note">one last thing</a>
          </nav>
        </header>
        {children}
        <footer>made with questionable levels of effort & an unreasonable amount of affection for a best friend ♡</footer>
      </body>
    </html>
  );
}