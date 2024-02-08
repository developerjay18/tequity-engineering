import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707230143/tequity/home/r2yrcod9zirazsqoznrb.jpg)`,
  };

  return (
    <footer className="footer-one">
      <div className="footer-one__bg"></div>
      <div className="footer-one__top">
        <div className="container mx-auto">
          <div className="row flex ">
            <div className="w-full">
              <div className="w-full footer-one__top-wrapper">
                <div className="row flex flex-col lg:flex-row justify-between w-full">
                  {/* adrress and logo  */}
                  <div
                    className="lg:w-[25%] wow animated fadeInUp pl-5"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link to={'/'} className="">
                          <img
                            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707192843/tequity/pilr0rkbqypyuzturnqq.png"
                            alt=""
                            className="-ml-5"
                          />
                        </Link>
                      </div>
                      <p className="footer-widget__about-text">
                        Unit 104, Mastermind IV, Royal Palms, Aarey colony,
                        Goregaon, Mumbai 65
                      </p>
                      <p className="footer-widget__about-email">
                        <Link
                          to={
                            'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales.teuquity@gmail.com'
                          }
                        >
                          sales.teuquity@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* products + links */}
                  <div
                    className="lg:w-[20%] pl-5 lg:pl-0 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="footer-widget__column footer-widget__services">
                      <h2 className="footer-widget__title">Services</h2>
                      <ul className="footer-widget__services-list">
                        <li className="footer-widget__services-list-item">
                          <Link to={'/ecm-machine'}>
                            Electro-Chemical Machining
                          </Link>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <Link to={'/cnc-micro-machine'}>
                            {' '}
                            CNC Micro Machining Center
                          </Link>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <Link to={'/spd-metal-printer'}>
                            {' '}
                            SPD Metal 3D Printer{' '}
                          </Link>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <Link to={'/filament-maker'}>
                            {' '}
                            3devo Filament Maker
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* quick links  */}
                  <div
                    className="lg:w-[15%] pl-5 pt-10 lg:pt-0 lg:pl-0  wow animated fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="footer-widget__column footer-widget__quicklinks">
                      <h2 className="footer-widget__title">Quick Links</h2>
                      <ul className="footer-widget__quick-links-list">
                        <li className="footer-widget__quick-links-list-item">
                          <Link to={'/'}>Home</Link>
                        </li>

                        <li className="footer-widget__quick-links-list-item">
                          <Link to={'/about'}>About Us</Link>
                        </li>

                        <li className="footer-widget__quick-links-list-item">
                          <Link to={'/contact'}>Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* social links  */}
                  <div
                    className="lg:w-[20%] pl-5 lg:pl-0 wow animated fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="footer-widget__column footer-widget__contact-info">
                      <h2 className="footer-widget__title">Get In Touch</h2>

                      <div className="footer-widget__contact-info-social-links">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-one__bottom clearfix">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__bottom-inner">
                <div className="footer-one__bottom-text w-full text-center">
                  <p>
                    Copyright &copy; 2022 All Rights Reserved by Tequity
                    Engineerings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
