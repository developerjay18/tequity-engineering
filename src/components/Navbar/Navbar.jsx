import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Electro-Chemical Machining',
    href: '/ecm-machine',
  },
  {
    name: 'CNC Micro Machining Center',
    href: '/cnc-micro-machine',
  },
  {
    name: '3devo Filament Maker',
    href: '/filament-maker',
  },
  {
    name: 'Electro-Chemical Machining',
    href: '/ecm-machine',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                <Link to={'/'}>+91 7385090442</Link>
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

            {/* menubar  */}
            <div className="lg:hidden">
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-white"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <span className="w-[30%]">
                          <img
                            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707192843/tequity/owxyeidft9qdgwyc5vdi.png"
                            alt=""
                            className=""
                          />
                        </span>
                        <span className="font-bold w-full">
                          Tequity Engineerings
                        </span>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {menuItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
