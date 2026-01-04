import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 py-10">
        <div className="w-11/12 mx-auto footer flex flex-col md:flex-row justify-between container-main">
          <div>
            <h2 className="font-bold text-lg text-white">PlateShare</h2>
            <p className="text-gray-300">
              we're here to support your pet's
              <br />
              health in every way we can.
            </p>
          </div>
          <div>
            <span className="footer-title text-white">Contact Info</span>
            <a className="link link-hover text-gray-300">
              Email: PlateShare@PlateShare.xyz
            </a>
            <a className="text-gray-300">Phone: +880 1700000000</a>
            <a className="text-gray-300">
              Address: Baridhara, Dhaka 1212, Bangladesh
            </a>
          </div>
          <div>
            <span className="footer-title text-white">Legal</span>
            <a className="link link-hover text-gray-300">Terms of Use</a>
            <a className="link link-hover text-gray-300">Privacy Policy</a>
            <a className="link link-hover text-gray-300">Cookie Policy</a>
          </div>
          <div>
            <span className="footer-title text-white">Follow Us</span>
            <div className="grid grid-flow-col gap-4">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  className="fill-current text-gray-300 hover:text-white"
                >
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 hover:text-white"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 hover:text-white"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} - All Rights Reserved by
            PlateShare
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
