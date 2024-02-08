import React from 'react';
import { Link } from 'react-router-dom';
import { aboutPoints, listDetails, productDetails } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ScrollToTop } from '../../components';

function Home() {
  const homeBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707198817/tequity/home/w0otsqvr5rwczbclb753.jpg)`,
  };

  const CTABG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707219251/tequity/home/fl0ef9pd2lze8jghbp45.jpg)`,
  };

  const hAnimation = {
    visibility: 'visible',
    animationDuration: '1500ms',
    animationDelay: '300ms',
    animationName: 'zoomIn',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen overflow-hidden">
      <ScrollToTop />

      {/* hero section  */}
      <section className="main-slider main-slider-one">
        <div className="swiper-container thm-swiper__slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image-layer" style={homeBG}></div>
              <div className="container mx-auto">
                <div className="row">
                  <div className="">
                    <div className="main-slider-one__inner text-center text-white">
                      <h2 className=" text-white text-5xl lg:text-8xl">
                        Pioneering Precision, Powering Progress
                      </h2>
                      <div className="mainslider-one__btn pt-20">
                        <Link to={'/contact'} className="thm-btn">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about intro section  */}
      <section className="about-one pb-0 mb-20">
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
                  <span className="sec-title__tagline">Why Choose Us</span>
                  <h2 className="sec-title__title">
                    Upgrade your manufacturing without the high costs
                  </h2>
                </div>

                <div className="about-one__content-text py-5">
                  <p>
                    We manufacture affordable CNC (Computer Numerical Control)
                    machines designed to excel in precision manufacturing,
                    additive processes, and calibration/testing, ensuring
                    optimal performance and efficiency across diverse industrial
                    applications.
                  </p>
                </div>

                <ul className="about-one__content-list">
                  {aboutPoints.map((item, index) => (
                    <li key={index}>
                      <span className="icon-wood-board">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>

                      <div className="title">
                        <h3>{item}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services slider section  */}
      <section className="our-material-one w-[95%] lg:pt-20 mx-auto">
        <Slider {...settings} className="pb-10">
          {productDetails.map((item, index) => (
            <div key={index} className="container mx-auto">
              <div className="flex flex-col lg:flex-row py-5 lg:py-0">
                <div className="lg:w-[50%] pb-5">
                  <div className="our-material-one__content">
                    <div className="sec-title">
                      <h2 className="sec-title__title">{item.name}</h2>
                      <p className="sec-title__text lg:pr-10">
                        {item.description}
                      </p>
                    </div>

                    <div className="our-material-one__content-btn">
                      <Link to={item.slug} className="thm-btn">
                        See Product
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[50%] max-h-[75vh] overflow-hidden">
                  <img src={item.imgUrl} alt="" className=" object-cover" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* list section  */}
      <section className="projects-one pb-20 lg:pb-24">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="projects-one__top">
                <div className="sec-title">
                  <h2 className="sec-title__title">
                    Industries we serve
                    <br />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row flex flex-col lg:flex-row justify-between">
            {listDetails.map((item, index) => (
              <div
                className="lg:w-[23%] wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="projects-one__single">
                  <div className="projects-one__single-img">
                    <img src={item.imgUrl} alt="" />
                  </div>

                  <div className="projects-one__single-content">
                    <h1 className="text-2xl text-[#f37e21] pb-3">
                      {item.name}
                    </h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA line  */}
      <section className="video-one py-10 pb-24">
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

export default Home;
