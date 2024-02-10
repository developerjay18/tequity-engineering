import React, { useState } from 'react';
import { CNCMMImages, CNCPoints } from './data';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '../../components';

function CNCMicroMac() {
  const aboutBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707494968/tequity/cnc-micro-machining/fx3ybc91di6qzmmtoov4.jpg)`,
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
    option1: [
      'Machine Steel Gantry',
      'Precision Ground Components',
      'Honeycomb Breadboard Base (Granite Bed Optional)',
      'Compact Volume (650mm x 650mm x 500mm)',
      'Power Requirements: 230V, 10A Connection',
    ],
    option2: [
      '3 Axis CNC',
      'X travel 100mm (50mm available)',
      'Y travel 100mm (50mm available)',
      'Z travel 50mm',
      'Resolution: 1.25µm',
      'Travel Accuracy: 5µm',
      'Repeatability: 5µm',
    ],
    option3: [
      '800W, 12000 rpm Spindle',
      'ER 11 Collet System',
      '0.5 to 6mm collets provided',
      'AC Spindle 24000 RPM 1.5kW (Optional)',
    ],
    option4: [
      'Type: Diode LASER',
      'Wavelength: 450nm',
      'Spot Type: Dotted (Adjustable)',
      'Cooling Method: Forced Air Cooling',
      'Engraves Polymers and Wood',
    ],
    option5: [
      'CMERI Controller',
      'Indigenous Interface',
      'Standard G Code and modified M Code inputs',
      'Windows PC-Based GUI (PC not provided)',
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
                    TEQ2 CNC Micro Machining Center.
                  </h1>
                  <div className="page-header__menu pt-10">
                    <h3 className="text-3xl text-center text-white font-semibold">
                      Precision in Every Dimension
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
            {CNCPoints.map((item, index) => (
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
      <section className="team-one team-one--team pt-10 mb-20">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">CNC Micro Machine</h2>
          </div>
          <div className="row flex flex-wrap justify-between gap-8 flex-col lg:flex-row ">
            {CNCMMImages.map((item, index) => (
              <div
                className="wow fadeInLeft lg:w-[30%]  lg:max-h-[60vh] lg:overflow-hidden"
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
              Machine
            </button>
            <button
              onClick={() => handleOptionSelect('option2')}
              style={{
                color: selectedOption === 'option2' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Motion
            </button>
            <button
              onClick={() => handleOptionSelect('option3')}
              className="font-Domine text-xl"
              style={{
                color: selectedOption === 'option3' ? '#f37e21' : 'black',
              }}
            >
              Spindle
            </button>
            <button
              onClick={() => handleOptionSelect('option4')}
              className="font-Domine text-xl"
              style={{
                color: selectedOption === 'option4' ? '#f37e21' : 'black',
              }}
            >
              Laser
            </button>
            <button
              onClick={() => handleOptionSelect('option5')}
              className="font-Domine text-xl"
              style={{
                color: selectedOption === 'option5' ? '#f37e21' : 'black',
              }}
            >
              Control and Interface
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

            <div className="lg:w-[50%] lg:pt-10">
              <img
                src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707210800/tequity/cnc-micro-machining/lkepltc08wffri3xgu5e.jpg"
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
                  Get a definitive guide <br /> to explore all about TEQ2 CNC’s{' '}
                  <br /> capabilities and applications!
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

export default CNCMicroMac;
