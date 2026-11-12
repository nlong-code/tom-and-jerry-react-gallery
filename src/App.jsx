
import React from "react";
import Image from "./components/Image";
import "./App.css";

import jerryImage from "./assets/hero.png";

// Student: Norma Long
// Assignment: Reusable React Image Component
// Date: November 9, 2026

function App() {
  const cartoonImages = [
    {
      source: jerryImage,
      width: "100%",
      alt: "Jerry the mouse",
      caption: "Jerry the Mouse",
    },
    {
      source: "https://image.pngaaa.com/851/1876851-middle.png",
      width: "100%",
      alt: "Tom the gray cat",
      caption: "Tom the Cat",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tom_and_Jerry_art_in_MultiVersus.png",
      width: "100%",
      alt: "Tom and Jerry together",
      caption: "Tom and Jerry Together",
    },
  ];

  return (
    <main className="page">
      <header className="hero">
        <h1>Tom &amp; Jerry</h1>
        <p>
          Welcome to my favorite cartoon gallery!
          Enjoy these classic characters and their funny adventures.
        </p>
      </header>

      <section className="gallery">
        {cartoonImages.map((item) => (
          <article className="image-card" key={item.caption}>
            <Image
              source={item.source}
              width={item.width}
              alt={item.alt}
            />
            <h2>{item.caption}</h2>
          </article>
        ))}
      </section>

      <footer>
        <p>Created by Norma Long | React Assignment</p>
      </footer>
    </main>
  );
}

export default App;
