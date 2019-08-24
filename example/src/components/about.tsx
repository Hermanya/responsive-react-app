import * as React from "react";
import "styled-components/macro";

function About() {
  return (
    <div>
      <video width="100%" controls autoPlay>
        <source src="/assets/recording.mov" type="video/mp4"></source>
        Your browser does not support HTML5 video.
      </video>

      <div css="padding: 32px;">
        <h1>Why did I make this?</h1>
        <p>
          As a frontend developer I find it difficult to build trully responsive
          websites. I'm not saying I can't write media queries (although I
          google syntax every time). But screen width on its own is not enough
          to make component layout decisions.
        </p>
        <p>
          And as a user I hate it when a desktop website does not offer a mobile
          version. Or when the desktop version is the mobile version stretched
          to all the way across my 15" screen.
        </p>
        <p>
          Desktop websites are notorious for wasting valueable screen space.
          Think about the last time you visited a website that did not have a
          1000px container.
        </p>
        <h2>Mobile first taken to extremes</h2>
        <p>
          So I when I was redesigning my website I decided to only make mobile
          pages. And instead of streching them on tablet and desktop, I would
          just show more pages at the same time.
        </p>
        <p>Try resizing this page in your browser.</p>
      </div>
    </div>
  );
}

export default About;
