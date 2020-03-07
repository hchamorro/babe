import React, { useEffect, useState } from "react";
import Oriana from "../assets/about_images/oriana.jpeg";
import Izzy from "../assets/about_images/izzy.jpeg";
import Hannah from "../assets/about_images/hannah.jpeg";
import Jo from "../assets/about_images/jo.jpeg";

function About() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="body-2 py-12">
      {/* {oriana and izzy - row one} */}
      <div className="flex justify-around py-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={Oriana} alt="Oriana's Headshot" />
          <div className="px-6 py-4">
            <div className="">Oriana Dentici</div>
            <p className="text-gray-700 text-base">
              <span className="">
                Who is a woman that has inspired you or your career?{" "}
                <div>
                  Mia Hamm; as a kid I idolized her and started taking soccer
                  more seriously because of her.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                Why are you passionate about this project?{" "}
                <div>
                  I feel that it is important to give women, women-identifying,
                  black, poc, queer people the platform to market themselves.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                3 Fun Facts About You:
                <ul>
                  <li>
                    1. I love live audio mixing! Running sound for concerts is
                    one of the best jobs I have.
                  </li>
                  <li>
                    2. My personality is best described as 'NPR in the morning,
                    metal in the evening.'
                  </li>
                  <li>3. I love driving manual transmission. </li>
                </ul>
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={Izzy} alt="Izzy's Headshot" />
          <div className="px-6 py-4">
            <div className="">Izzy Edson</div>
            <p className="text-gray-700 text-base">
              <span className="">
                Who is a woman that has inspired you or your career?{" "}
                <div>
                  Mia Hamm; as a kid I idolized her and started taking soccer
                  more seriously because of her.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                Why are you passionate about this project?{" "}
                <div>
                  I feel that it is important to give women, women-identifying,
                  black, poc, queer people the platform to market themselves.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                3 Fun Facts About You:
                <ul>
                  <li>
                    1. I have the best dog in the world, Ellie! She even has her
                    own IG: @whattheeloise
                  </li>
                  <li>2. Coffee is life</li>
                  <li>3. Chicago is home, but LA is where my heart is.</li>
                </ul>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* {hannah and jo - row two} */}
      <div className="flex justify-around py-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={Hannah} alt="Hannah's Headshot" />
          <div className="px-6 py-4">
            <div className="">Hannah Chamorro</div>
            <p className="text-gray-700 text-base">
              <span className="">
                Who is a woman that has inspired you or your career?{" "}
                <div>
                  Mia Hamm; as a kid I idolized her and started taking soccer
                  more seriously because of her.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                Why are you passionate about this project?{" "}
                <div>
                  I feel that it is important to give women, women-identifying,
                  black, poc, queer people the platform to market themselves.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                3 Fun Facts About You:
                <ul>
                  <li>1. I'm a coding BAMF </li>
                  <li>2. I create masterful dishes</li>
                  <li>3. Rock climbing is awesome</li>
                </ul>
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={Jo} alt="Jo's Headshot" />
          <div className="px-6 py-4">
            <div className="">Jo Sowa</div>
            <p className="text-gray-700 text-base">
              <span className="">
                Who is a woman that has inspired you or your career?{" "}
                <div>
                  Mia Hamm; as a kid I idolized her and started taking soccer
                  more seriously because of her.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                Why are you passionate about this project?{" "}
                <div>
                  I feel that it is important to give women, women-identifying,
                  black, poc, queer people the platform to market themselves.
                </div>
              </span>
              <div>&nbsp;</div>
              <span className="">
                3 Fun Facts About You:
                <ul>
                  <li>
                    1. Sowa means "owl" in Polish, but Sowasowa means "jittery"
                    in Japanese..I'm a jittery owl
                  </li>
                  <li>2. Graphic design is my passion</li>
                  <li>3. I'm an accredited equestrian</li>
                </ul>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
