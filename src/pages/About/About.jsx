import React from 'react';
import { Link } from 'react-router-dom';
import { solutions } from './data';
import { ScrollToTop } from '../../components';

function About() {
  const aboutBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707493914/tequity/home/gb20ezm1cmkz3euoazaa.jpg)`,
  };

  const hAnimation = {
    visibility: 'visible',
    animationDuration: '1500ms',
    animationDelay: '300ms',
    animationName: 'zoomIn',
  };

  const CTABG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707219251/tequity/home/fl0ef9pd2lze8jghbp45.jpg)`,
  };

  return (
    <div>
      <ScrollToTop />
      {/* hero section  */}
      <section className="page-header page-header--services-single-one">
        <div className="text-black text-5xl"></div>
        <div className="page-header__bg" style={aboutBG}></div>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h1 className="text-3xl pb-5 text-white text-center">
                    About Us
                  </h1>
                  <div className="page-header__menu">
                    <h3 className="text-5xl lg:text-6xl text-center text-white font-semibold">
                      Precision is More Than a Metric. It&apos;s the Core of Our
                      Engineering Philosophy.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info section  */}
      <section className="about-one about-one--two about-one--two--about">
        <div className="container mx-auto">
          <div className="row flex flex-col lg:flex-row">
            <div className="lg:w-[50%]">
              <div className="about-one__img">
                <div className="about-one__img1">
                  <img
                    src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707200233/tequity/home/xzwhf4xyhkeafm7zemps.jpg"
                    alt=""
                  />
                </div>

                <div className="about-one__img2 ">
                  <div className="video-icon z-20 hidden lg:block">
                    <a
                      className="video-popup wow zoomIn animated animated animated animated"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                      title=" Video"
                      href="https://www.youtube.com/watch?v=p25gICT63ek"
                      style={hAnimation}
                    >
                      <span className="icon-play-button-3">
                        <i className="fa-solid fa-play fa-xl"></i>
                      </span>
                    </a>
                  </div>
                  <img
                    src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707201183/tequity/home/buokiqeyrbtazfe6oklw.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-[50%]">
              <div className="about-one__content">
                <div className="sec-title">
                  <span className="sec-title__tagline">Introduction</span>
                  <h2 className="sec-title__title">Who We Are?</h2>
                </div>

                <div className="about-two__content-text2">
                  <p className="">
                    Tequity Engineering is a dynamic startup led by a passionate
                    team with over a decade of expertise in precision
                    manufacturing, additive manufacturing, calibration, and
                    testing. Our forte lies in crafting niche machine tools that
                    seamlessly handle both conventional and unconventional
                    processes.
                  </p>
                </div>

                <div className="about-two__content-text2">
                  <p className="py-7">
                    We go beyond conventional approaches, providing versatile
                    solutions designed to elevate operational efficiency and
                    product quality across diverse sectors. Tequity&apos;s
                    commitment doesn&apos;t stop at delivering precision
                    technologies; we forge enduring partnerships with our
                    clients, offering unwavering support to ensure seamless
                    integration and thriving operations.
                  </p>
                </div>

                <div className="about-two__content-text2">
                  <p>
                    Whether you're navigating complexities in manufacturing or
                    seeking innovative solutions, our team is here to
                    collaborate with you. Drop us a line, and let's tackle your
                    challenges together. We're here to help and find simple,
                    effective solutions that work for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* choose points  */}
      <section className="container mx-auto">
        <div className="sec-title">
          <h2 className="sec-title__title pt-2">WHY CHOOSE US?</h2>
        </div>

        <div className="flex flex-wrap gap-y-10 lg:gap-y-6 ">
          {solutions.map((item, index) => (
            <div className="about-two__content-text2 lg:w-[50%]" key={index}>
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="pt-2 lg:pr-20">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* carousel section of clients  */}

      {/* CTA line  */}
      <section className="video-one mt-28 py-10 pb-24">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__inner text-center" style={CTABG}>
                <h2>
                  See how our affordable machines <br /> can make your
                  manufacturing <br />
                  more precise and efficient
                </h2>

                <div className="video-one__bottom">
                  <div className="text">
                    <Link to={'/contact'}>Get In Touch</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
