import React from "react";
import MarqueeSection from "./MarqueeSection";

const Marquee = () => {
  const upperMarquee = [
    './coursera.png',
    './gfg.png',
    './github.png',
    './google.png',
    './greatlearning.png',
    './linkedinlearning.png',
    './mdn.png',
    './meta.png',
    './stanford.png',
    './youtubelogo.png',
  ];

  const lowerMarquee = [
    './coursera.png',
    './gfg.png',
    './github.png',
    './google.png',
    './greatlearning.png',
    './linkedinlearning.png',
    './mdn.png',
    './meta.png',
    './stanford.png',
    './youtubelogo.png',
  ];

  return (
    <div className="container mx-auto">
      <MarqueeSection images={upperMarquee} from={0} to={"-100%"} />
      <br />
      <MarqueeSection images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;