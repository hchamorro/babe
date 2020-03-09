import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import '../assets/babe.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="py-6">
        {/* top part */}
        <div className="flex px-12 justify-between">
          {/* about / contact / join newsletter */}
          <div className="justify-start">
            <Link className="footer-links a" to="/About">
              About
            </Link>
            <p className="footer-links">Contact</p>
            <p className="footer-links">Join Our Newsletter</p>
          </div>
          {/* center for spacing purposes */}
          <div>&nbsp;</div>
          {/* for BABES only */}
          <div className="justify-end">
            <p className="py-8 babes-only">For B.A.B.Es Only</p>
          </div>
        </div>
        {/* copyright */}
        <div className="flex justify-center">
          <p className="copyright">Copyright © 2020 B.A.B.E.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
