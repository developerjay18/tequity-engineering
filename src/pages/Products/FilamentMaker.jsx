import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SDPPoints, filamentImages, filamentPoints } from './data';
import { ScrollToTop } from '../../components';

function FilamentMaker() {
  const aboutBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707495260/tequity/filament-maker/ynnscb0ohk5edylpzb3k.jpg)`,
  };

  const CTABG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707219251/tequity/home/fl0ef9pd2lze8jghbp45.jpg)`,
  };

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Information for each option
  const optionsInfo = {
    option1: ['Operating Range: Up to 450°C'],
    option2: ['Range: 0.5 – 4mm Ø'],
    option3: [
      'Material: Nitride-hardened screws (for industrial-grade durability)',
    ],
    option4: ['Multi-zone heating with four separate zone'],
    option5: [
      'Vision-Based Diameter Sensing',
      'Camera-Assisted Filament Calibration',
      'Real-Time Visual Diameter Inspection',
      '3-Axis Design',
      'Advanced optics reduce interference from ambient light',
    ],
    option6: [
      'Embedded 7" LCD touchscreen',
      'USB for data exchange and firmware updates',
    ],
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
                  <h1 className="text-5xl lg:text-6xl pt-10 pb-5 text-white text-center">
                    3devo Filament Maker
                  </h1>
                  <div className="page-header__menu pt-10">
                    <h3 className="text-3xl text-center text-white font-semibold">
                      The Future of Additive Manufacturing
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* points section  */}
      <section className="services-one clearfix">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Key features</h2>
          </div>

          <div className="flex justify-between flex-wrap flex-col lg:flex-row">
            {filamentPoints.map((item, index) => (
              <div
                className="lg:w-[30%] wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="cursor-pointer lg:min-h-[58vh] services-one__single text-center">
                  <h2>
                    <a>
                      <div>{item.title}</div>
                      <div>{item?.title2}</div>
                    </a>
                  </h2>
                  <div className="text">
                    <p className="lg:px-5">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery section  */}
      <section className="team-one team-one--team pt-10 mb-24">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Filament Maker</h2>
          </div>
          <div className="row flex flex-wrap justify-between gap-8 flex-col lg:flex-row">
            {filamentImages.map((item, index) => (
              <div
                className="wow fadeInLeft lg:w-[30%] shadow-lg"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="team-one__single">
                  <div className="team-one__single-img">
                    <img src={item} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dynamic bar section  */}
      <section className="py-0 pb-16">
        <div>
          {/* Bar containing three options */}
          <div
            style={{}}
            className="border border-[#f37e21] container mx-auto flex justify-evenly py-8 flex-col lg:flex-row gap-5 lg:gap-0"
          >
            <button
              onClick={() => handleOptionSelect('option1')}
              style={{
                color: selectedOption === 'option1' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Temperatures
            </button>
            <button
              onClick={() => handleOptionSelect('option2')}
              style={{
                color: selectedOption === 'option2' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Diameter Range
            </button>
            <button
              onClick={() => handleOptionSelect('option3')}
              style={{
                color: selectedOption === 'option3' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Extruder Screw
            </button>
            <button
              onClick={() => handleOptionSelect('option4')}
              style={{
                color: selectedOption === 'option4' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Heating System
            </button>
            <button
              onClick={() => handleOptionSelect('option5')}
              style={{
                color: selectedOption === 'option5' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Advanced Sensor System
            </button>
            <button
              onClick={() => handleOptionSelect('option6')}
              style={{
                color: selectedOption === 'option6' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              User Interface
            </button>
          </div>

          <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-0">
            {/* Display information based on selected option */}
            <div
              style={{ textAlign: 'center' }}
              className="pt-10 lg:pt-0 lg:w-[50%]"
            >
              {selectedOption && (
                <div className="container mx-auto text-left">
                  {optionsInfo[selectedOption].map((item, index) => (
                    <h2
                      className="font-Domine text-xl py-1 flex gap-4"
                      key={index}
                    >
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span>{item}</span>
                    </h2>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:w-[50%]">
              <img
                src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707210444/tequity/filament-maker/zbssgz83wngrqs6zot8u.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA line  */}
      <section className="video-one mt-16 py-10 pb-24">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__inner text-center" style={CTABG}>
                <h2>
                  Get deeper insights <br /> into C-TEQ SPD 3D Printer’s <br />{' '}
                  capabilities and applications!
                </h2>

                <div className="video-one__bottom">
                  <div className="text">
                    <Link to={'/contact'}>Download Brochure</Link>
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

export default FilamentMaker;
