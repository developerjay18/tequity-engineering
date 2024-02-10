import React, { useState } from 'react';
import { ECMMachinesImages, ECMPoints, ECMPoints2 } from './data';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '../../components';

function ECMMachine() {
  const aboutBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707494589/tequity/ecm/bdjaiqc32rfc2x9wuzzk.jpg)`,
  };

  const CTABG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707219251/tequity/home/fl0ef9pd2lze8jghbp45.jpg)`,
  };

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const [isColor, setIsColor] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Information for each option
  const optionsInfo = {
    option1: [
      '3 Axis CNC',
      'X Travel: 100mm',
      'Y Travel: 100mm',
      'Z Travel: 50mm',
      'Resolution: 1.25µm',
      'Travel Accuracy: 10µm',
      'Corrosion Resistant Parts',
    ],
    option2: [
      'Voltage Range: 0 – 50V DC',
      'Output Range: 0.1 – 5A',
      'Function Generator for Waveform Control',
      'Duty Cycle: 0.1 to 50%',
      'Indigenously Developed Power Supply Controller',
    ],
    option3: [
      'CMERI Controller',
      'User-friendly PC-based GUI Control',
      'Short Detection and Retraction (all axes)',
    ],
    option4: [
      'PMMA ECM Tank (2L)',
      'Efficient Electrolyte Filtration System',
      'Electrolyte Recirculation System',
      'Material Specific Recipes',
      'Machine Head: Electrically Isolated Spindle with ER-11 Collet',
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
                  <h1 className="text-4xl lg:text-6xl pt-10 pb-5 text-white text-center">
                    TEQ-ECM: 3 in 1 Electro-Chemical Machining (ECM) Machining
                    Center
                  </h1>
                  <div className="page-header__menu pt-10">
                    <h3 className="text-3xl text-center text-white font-semibold">
                      Unrivalled Precision, Unmatched Performance
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

          <div className="flex justify-between flex-wrap flex-col lg:flex-row gap-5">
            {ECMPoints.map((item, index) => (
              <div
                className="lg:w-[48%] wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="cursor-pointer services-one__single ">
                  <h2>
                    <a>
                      <div>{item.title}</div>
                      <div>{item?.title2}</div>
                    </a>
                  </h2>
                  <div className="text">
                    <p className="">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* temp points 2 section  */}
      <section className="work-one work-one--services py-10">
        <div className="shape1">
          <img src="assets/images/shapes/work-v1-shape1.png" alt="" />
        </div>
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">3 Processes 1 Machine</h2>
          </div>
          <div className="row flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
            {ECMPoints2.map((item, index) => (
              <div
                className="lg:w-[30%] shadow-xl p-5 wow animated fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="work-one__single text-center">
                  <div className={`work-one__single-icon ${item.bg} pt-0`}>
                    <span className="icon-wood-board pt-0">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <div className="count-box"></div>
                  </div>
                  <h2>
                    <a>{item.title}</a>
                  </h2>
                  <p className="px-3 py-5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery section  */}
      <section className="team-one team-one--team mt-10 lg:mb-0 lg:pb-10">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">ECM Machine</h2>
          </div>
          <div className="row flex flex-wrap justify-between gap-8 flex-col lg:flex-row">
            {ECMMachinesImages.map((item, index) => (
              <div
                className="wow fadeInLeft lg:w-[30%] "
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
      <section className="py-20">
        <div>
          {/* Bar containing three options */}
          <div className="border border-[#f37e21] container mx-auto flex justify-evenly py-8 flex-col lg:flex-row gap-5 lg:gap-0">
            <button
              onClick={() => handleOptionSelect('option1')}
              style={{
                marginRight: '10px',
                color: selectedOption === 'option1' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Precision <br /> Motion
            </button>
            <button
              onClick={() => handleOptionSelect('option2')}
              style={{
                marginRight: '10px',
                color: selectedOption === 'option2' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Advanced ECM <br /> Power Supply
            </button>
            <button
              onClick={() => handleOptionSelect('option3')}
              style={{
                color: selectedOption === 'option3' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Efficient Machine <br /> Control
            </button>
            <button
              onClick={() => handleOptionSelect('option4')}
              style={{
                color: selectedOption === 'option4' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              ECM System <br /> Enhancements
            </button>
          </div>

          <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-0">
            {/* Display information based on selected option */}
            <div style={{ textAlign: 'center' }} className="lg:w-[50%]">
              {selectedOption && (
                <div className="container mx-auto text-left pt-10 lg:pt-0">
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
                src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707140608/tequity/ecm/wbgdnoxmk405unjfbj4m.jpg"
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
                  Get a comprehensive guide on <br /> our TEQ-ECM
                  technology&apos;s intricate <br /> capabilities and
                  applications.
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

export default ECMMachine;
