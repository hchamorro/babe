import React, { useEffect, useState } from 'react';

function About() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className=""
        src="https://unsplash.com/photos/3Xd5j9-drDA"
        alt="Display"
      />
      <div className="px-6 py-4">
        <div className="">Blessing Krofegha</div>
        <p className="text-gray-700 text-base">
          When i’m not coding i switch to netflix with biscuits and cold tea as
          my companion. <span></span>😜
        </p>
      </div>
      <div className="">
        <span className="">#Software Engineer</span>
        <span className="">#Writter</span>
        <span className="">#Public Speaker</span>
      </div>
    </div>
  );
}

export default About;
