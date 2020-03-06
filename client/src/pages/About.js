import React, { useEffect, useState } from 'react';
import Oriana from '../assets/about_images/oriana.jpeg';

function About() {
  const [results, setResults] = useState({});

  useEffect(() => { }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className=""
        src={Oriana}
        alt="Oriana's Headshot"
      />
      <div className="px-6 py-4">
        <div className="">Oriana Dentici</div>
        <p className="text-gray-700 text-base">
          <span classname="">Who is a woman that has inspired you or your career? <div>Mia Hamm; as a kid I idolized her and started taking soccer more seriously because of her.</div></span>
          <div>&nbsp;</div>
          <span classname="">Why are you passionate about this project? <div>I feel that it is important to give women, women-identifying, black, poc, queer people the platform to market themselves.</div></span>
          <div>&nbsp;</div>
          <span classname="">3 Fun Facts About You:
            <ul>
              <li>1. I love live audio mixing! Running sound for concerts is one of the best jobs I have.</li>
              <li>2. My personality is best described as 'NPR in the morning, metal in the evening.'</li>
              <li>3. I love driving manual transmission. </li></ul></span>
        </p>
        <div className="">
        </div>
      </div>
    </div>
  );
}

export default About;
