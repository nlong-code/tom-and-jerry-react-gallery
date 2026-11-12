import React from "react";
import Image from "./components/Image.jsx";
import "./app.css";

import jerryImage from "./images/jerry.png";
import logoImage from "./images/tom-and-jerry-logo.png";

// Student: Norma Long
// Assignment: Reusable React Image Component
// Date: November 10, 2026

function App() {
  // Each object provides the image source, width, description, and caption.
  const cartoonImages = [
    {
      source: jerryImage,
      width: "100%",
      alt: "Jerry the mouse",
      caption: "Jerry the Mouse",
    },
    {
      source: logoImage,
      width: "100%",
      alt: "Tom and Jerry logo",
      caption: "Tom & Jerry Logo",
    },
    {
      source: "https://image.pngaaa.com/851/1876851-middle.png",
      width: "100%",
      alt: "Tom the cat",
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
          Welcome to my favorite cartoon gallery! Enjoy these classic
          characters and their funny adventures.
        </p>
      </header>

      <section className="gallery" aria-label="Tom and Jerry image gallery">
        {cartoonImages.map((item) => (
          <article className="image-card" key={item.caption}>
            <Image source={item.source} width={item.width} alt={item.alt} />
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
