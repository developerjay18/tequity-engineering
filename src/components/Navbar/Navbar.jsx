import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main-header main-header--one clearfix">
      <div className="main-header--one__wrapper">
        <div className="auto-container">
          <div className="main-header--one__inner">
            <div className="w-14 lg:w-20">
              <div className="logo">
                <Link to={'/'} className="w-20">
                  <img
                    src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707192843/tequity/owxyeidft9qdgwyc5vdi.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </div>

            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="main-header--one__middle">
                  <ul className="main-menu__list">
                    <li className="dropdown current">
                      <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>

                    <li className="dropdown">
                      <Link>Products</Link>
                      {/* drop-down menu  */}
                      <ul>
                        <li>
                          <Link to={'/ecm-machine'}>
                            Electro-Chemical Machining
                          </Link>
                        </li>
                        <li>
                          <Link to={'/cnc-micro-machine'}>
                            CNC Micro Machining Center
                          </Link>
                        </li>
                        <li>
                          <Link to={'/spd-metal-printer'}>
                            SPD Metal 3D Printer
                          </Link>
                        </li>
                        <li>
                          <Link to={'/filament-maker'}>
                            3devo Filament Maker
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="main-header--one__right clearfix">
              <div className="number">
                <Link to={'/'}>+91 6351468706</Link>
              </div>

              <div className="social-icon">
                <ul>
                  <li>
                    <Link to={'/'}>
                      <span className="fab fa-facebook"></span>
                    </Link>
                  </li>

                  <li>
                    <Link to={'/'}>
                      <span className="fab fa-linkedin"></span>
                    </Link>
                  </li>

                  <li>
                    <Link to={'/'}>
                      <span className="fab fa-google"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
